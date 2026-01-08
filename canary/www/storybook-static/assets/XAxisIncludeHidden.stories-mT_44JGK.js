import{r as f,e}from"./iframe-BeTvSsnM.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-htB2Xdvz.js";import{R as C}from"./arrayEqualityCheck-D3IRE7yY.js";import{C as K}from"./ComposedChart-BO-NFwBX.js";import{X as A}from"./XAxis-CikzDxWn.js";import{L as v}from"./Legend-DHkaMzVY.js";import{B as a}from"./Bar-CHHgzfDk.js";import{R as x}from"./RechartsHookInspector-CQodTe4G.js";import{p as s}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-Bu9sKtx0.js";import"./CartesianAxis-CLVwDgLN.js";import"./Layer-vwm7UlyD.js";import"./Text-DQUPEW1Z.js";import"./DOMUtils-CPaL2uk1.js";import"./Label-DX1B0Se3.js";import"./PolarUtils-CiP_-J6C.js";import"./ZIndexLayer-D3vvSLkM.js";import"./zIndexSlice-ClDvfLGt.js";import"./types-ColG541f.js";import"./hooks-Buy-B5J7.js";import"./axisSelectors-B3oALCrY.js";import"./RechartsWrapper-DqbHfwZA.js";import"./CartesianChart-Btcoj6QB.js";import"./chartDataContext-BveSyHyY.js";import"./CategoricalChart-7psyK6-L.js";import"./Symbols-Drvhtafw.js";import"./Curve-B6pW5hMh.js";import"./useElementOffset-4UzseTJd.js";import"./iteratee-B3Iw57Mc.js";import"./tooltipContext-1OFOmRSd.js";import"./ReactUtils-Bt5PnhOQ.js";import"./ActiveShapeUtils-DAFlR22H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Do5x2l-c.js";import"./useAnimationId-CijMLLZk.js";import"./Trapezoid-zw4Ixv-f.js";import"./Sector-CUcldSZb.js";import"./RegisterGraphicalItemId-ktGcRGkW.js";import"./ErrorBarContext-MJgNid9a.js";import"./GraphicalItemClipPath-CllyT1DZ.js";import"./SetGraphicalItem-T9xLTiUd.js";import"./getZIndexFromUnknown-Bs2AFGGc.js";import"./graphicalItemSelectors-3O4_0vAQ.js";import"./index-BBjIj-68.js";import"./ChartSizeDimensions-8siL2NNx.js";import"./OffsetShower-Bali05F_.js";import"./PlotAreaShower-DNqWhhRF.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ae as default};
