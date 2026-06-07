import{r as f,R as e}from"./iframe-BB3m-jQ-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DFvGwgRl.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-FQKZcMr3.js";import{C as k}from"./ComposedChart-B0LqgEa_.js";import{X as K}from"./XAxis-pxNAoOYF.js";import{L as v}from"./Legend-CNZk2NxG.js";import{B as s}from"./Bar-BlYzhLLE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bu83WliH.js";import"./CartesianAxis-DNzSt2Ud.js";import"./Layer-Bqk0isqQ.js";import"./resolveDefaultProps-D0AMNGzs.js";import"./Text-CQr6lPUD.js";import"./DOMUtils-v0Nl75wH.js";import"./isWellBehavedNumber-CFV6UIHi.js";import"./Label-DntCvjB2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGBP_zx3.js";import"./index-iRCZcjtj.js";import"./index-B5zT9Os4.js";import"./types-DSXkzfdz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-eHBrq3FU.js";import"./immer-Bb2hNnOx.js";import"./RechartsWrapper-BeVmqhAg.js";import"./index-AMNPHvWI.js";import"./index-CDnCFTh2.js";import"./axisSelectors-D1VEbPH5.js";import"./d3-scale-m2Sr9nLg.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CVsCYNZX.js";import"./chartDataContext-DDcaXf9b.js";import"./CategoricalChart-5b78-xMl.js";import"./Symbols-DrzCmBWa.js";import"./symbol-BOqiXccp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CexjbpfR.js";import"./uniqBy-CGQlZ1n7.js";import"./iteratee-B1717eE-.js";import"./tooltipContext-CnuDDGAi.js";import"./AnimatedItems-CAeOjIy6.js";import"./useAnimationId-D5BtmEUA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZncl5wy.js";import"./ActiveShapeUtils-DMvn0j27.js";import"./RegisterGraphicalItemId-Co_tAnFn.js";import"./ErrorBarContext-BC4Vqnor.js";import"./GraphicalItemClipPath-Bd5aR1hb.js";import"./SetGraphicalItem-QprqGCl_.js";import"./getZIndexFromUnknown-CAsEoNUg.js";import"./graphicalItemSelectors-SYOYweJl.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
