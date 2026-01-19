import{r as f,e}from"./iframe-BfEeuf29.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-Dk-NUqCy.js";import{R as A}from"./arrayEqualityCheck-CQTYn8oK.js";import{C}from"./ComposedChart-PLvFJZNy.js";import{X as K}from"./XAxis-DCok0cmX.js";import{L as v}from"./Legend-DV-YA5se.js";import{B as a}from"./Bar-6HhjwsWZ.js";import{R as x}from"./RechartsHookInspector-CaAU2h8E.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D5wHr7xB.js";import"./CartesianAxis-D11Z6FnG.js";import"./Layer-WUPrCNhO.js";import"./Text-Cat3JN_E.js";import"./DOMUtils-kfWXwCLP.js";import"./Label-BQL_xh_a.js";import"./PolarUtils-B3A4Bn44.js";import"./ZIndexLayer-nNaEVjlH.js";import"./zIndexSlice-DJbSQN7A.js";import"./types-B9h6Osdn.js";import"./hooks-CshdMEx0.js";import"./axisSelectors-BzW232an.js";import"./RechartsWrapper-DsA4AxRI.js";import"./CartesianChart-Ded3Vhag.js";import"./chartDataContext-96TYBSAN.js";import"./CategoricalChart-Dc9eAC4P.js";import"./Symbols-DTph50Q3.js";import"./Curve-QDibvidp.js";import"./useElementOffset-C3xH1JMH.js";import"./iteratee-D9HA3Tju.js";import"./tooltipContext-GkGaAySd.js";import"./ReactUtils-Dy1dqhtA.js";import"./ActiveShapeUtils-DAJHbM11.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BLgB_eL-.js";import"./useAnimationId-593qmaql.js";import"./Trapezoid-D5AU_-Tp.js";import"./Sector-Bpai8LVK.js";import"./RegisterGraphicalItemId-BNJoKXDB.js";import"./ErrorBarContext-D7bWjwna.js";import"./GraphicalItemClipPath-BkoIn00V.js";import"./SetGraphicalItem-D6lIAA2e.js";import"./getZIndexFromUnknown-BF3Srb5q.js";import"./graphicalItemSelectors-BrBcZ1Wi.js";import"./index-n-fO4kHm.js";import"./ChartSizeDimensions-DtODaN3g.js";import"./OffsetShower-usFsQs5P.js";import"./PlotAreaShower-Pa3IuuRb.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ke=["WithIncludeHidden"];export{t as WithIncludeHidden,Ke as __namedExportsOrder,Ce as default};
