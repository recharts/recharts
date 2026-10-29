import{r as f,R as e}from"./iframe-DpFoyu2v.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-UjIlgdkn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BR5-by35.js";import{C as k}from"./ComposedChart-DYhdzMG2.js";import{X as K}from"./XAxis-B0PuBmnr.js";import{L as v}from"./Legend-m6bZE-oV.js";import{B as a}from"./Bar-DsnOo6pN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-RSQOEDTQ.js";import"./Text-B1i7DvDe.js";import"./resolveDefaultProps-Bl7dCfEE.js";import"./DOMUtils-I7Jj66xj.js";import"./ZIndexLayer-Q15FdZk9.js";import"./index-CXkQwc1T.js";import"./index-Dvxsi2Qy.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CoSF9I4I.js";import"./throttle-CbL9mvVE.js";import"./axisSelectors-DsRIuzGY.js";import"./d3-scale-DFMCrQku.js";import"./CartesianAxis-C3Cmf1pW.js";import"./Layer-C27d_lJh.js";import"./types-nITqZw6s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DLxnQ8Ny.js";import"./index-CQQQihly.js";import"./index-DPbLagXs.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BNB2siqp.js";import"./index-J5LyVsrM.js";import"./CartesianChart-C9Oi4Bgl.js";import"./ZIndexPortal-j1WUiNyF.js";import"./CategoricalChart-CbXZ5UqK.js";import"./Symbols-BqVxLZyQ.js";import"./symbol-Bc1WE4jB.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-CLwCi-e2.js";import"./dataEntryStyles-BSD8zeo1.js";import"./useElementOffset-wTrI9o3y.js";import"./uniqBy-Bawyhepk.js";import"./iteratee-BD3h7MYT.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BcqFX_Cs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1RSMQ2o.js";import"./useAnimationId-DcTYtpTG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOhyqEjv.js";import"./tooltipContext-CGsnQSSL.js";import"./ErrorBarContext-C0P4PP3P.js";import"./activeStyles-Dlv-kHFt.js";import"./SetGraphicalItem-BiUFphqr.js";import"./getZIndexFromUnknown-BleHfm24.js";import"./useEffectiveDataKey-D3EJWYit.js";import"./omit-Dp2qMHLc.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
