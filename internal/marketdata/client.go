package marketdata

type MarketDataFetch interface {
	GetPrice([]string, string) (map[string]float64, error)
	CalculateBuyUnit([]string, float64) (map[string]float64, error)
	GetHistory([]string, int8) (map[string]float64, error)
}