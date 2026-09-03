import{r as f,R as e}from"./iframe-DUU2nC7E.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Ba7XqdaR.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B1qxAnWW.js";import{C as k}from"./ComposedChart-DbguBWi6.js";import{X as K}from"./XAxis-C5ZNeLXM.js";import{L as v}from"./Legend-DWw1TWPW.js";import{B as s}from"./Bar-CJOmLuua.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BpgemmXF.js";import"./Text-Dq73j3Z8.js";import"./resolveDefaultProps-BqMh5-lE.js";import"./DOMUtils-CWtn717I.js";import"./isWellBehavedNumber-QUwuvSMb.js";import"./useId-D3HKJv3C.js";import"./useBackwardsCompatibleTheme-i7diorAo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-09JGIcjO.js";import"./index-DfISOqFY.js";import"./index-BweKhhB8.js";import"./RechartsWrapper-DlUPtncW.js";import"./axisSelectors-oYeY2Mwn.js";import"./throttle-DU8m77oh.js";import"./d3-scale-cKq8MwgY.js";import"./index-By0b-RMY.js";import"./index-BLrpc9iL.js";import"./renderedTicksSlice-CQmIW09G.js";import"./index-eVEWj-zV.js";import"./CartesianAxis-D6Xv7Kst.js";import"./Layer-CpTHNZLk.js";import"./types-D26lJf4n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D01briWp.js";import"./chartDataContext-DFaXfB60.js";import"./CategoricalChart-CP242KCm.js";import"./Symbols-BDrFNT0n.js";import"./symbol-66LGfBly.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CVQocJ2R.js";import"./uniqBy-BjaaEqQ9.js";import"./iteratee-DLKh6RnP.js";import"./AnimatedItems-CtOvBSOT.js";import"./useAnimationId-Hor1kczP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0PZq1UN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DXSvZ-3T.js";import"./tooltipContext-BeWmmBgM.js";import"./RegisterGraphicalItemId-DH-o1j-9.js";import"./ErrorBarContext-ql3O-cNM.js";import"./GraphicalItemClipPath-CFHEX7Zj.js";import"./SetGraphicalItem-DSRKMZ7M.js";import"./getZIndexFromUnknown-QbHxmcCA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dhw2oYc2.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
