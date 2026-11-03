import{r as f,R as e}from"./iframe-C9Icmvn-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-EbKXu10L.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BtEgXkTj.js";import{C as k}from"./ComposedChart-D9iZM0Ny.js";import{X as K}from"./XAxis-3c-aZ5Pt.js";import{L as v}from"./Legend-BzvF9ZOT.js";import{B as a}from"./Bar-BylXbNGS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B5iIonTH.js";import"./Text-sNGi1G51.js";import"./resolveDefaultProps-Ca82pTCc.js";import"./DOMUtils-B21FeQ1N.js";import"./ZIndexLayer-B_nMkGpF.js";import"./index-Dmxp60UK.js";import"./index-OnkxBtFQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BlT-4ON5.js";import"./throttle-BP58Oxor.js";import"./axisSelectors-C12AZXdM.js";import"./d3-scale-DZcRnjza.js";import"./CartesianAxis-R6B48fBq.js";import"./Layer-wqByJTCO.js";import"./types-C9Uy4GKt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-wh0y1ne7.js";import"./index-WAfrpxeX.js";import"./index-D9kzRPzU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CtHkjOy7.js";import"./index-Dwiu-D7S.js";import"./fillDefinitions-BsgJeWYO.js";import"./CartesianChart-TwWF9vdI.js";import"./ZIndexPortal-Dm-GjtZl.js";import"./CategoricalChart-PMdsySjF.js";import"./Symbols-ColLzRAz.js";import"./symbol-4cE6vjyv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cww1lqIJ.js";import"./uniqBy-D4B7yWHg.js";import"./iteratee-e68Efg3c.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BBURyYAC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BsmVPfs4.js";import"./useAnimationId-BL9AhoYr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B_TPSWTk.js";import"./tooltipContext-kO2lJoKe.js";import"./dataEntryStyles-BjZqswDr.js";import"./ErrorBarContext-BlDg14Jm.js";import"./activeStyles-h91K6JZi.js";import"./SetGraphicalItem-xkXC5Q40.js";import"./getZIndexFromUnknown-Dfmzqvri.js";import"./useEffectiveDataKey-C0LxQIpq.js";import"./omit-DYtv04xC.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
