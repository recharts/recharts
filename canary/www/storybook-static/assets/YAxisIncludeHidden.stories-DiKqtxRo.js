import{r as f,R as e}from"./iframe-DJb0mK8M.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CWLYUyep.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CT0NLGnJ.js";import{C as k}from"./ComposedChart-CuzfZC2T.js";import{X as K}from"./XAxis-rFQD6Pba.js";import{L as v}from"./Legend-COUILfwW.js";import{B as a}from"./Bar-CGcY5u7i.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BzZymjIq.js";import"./Text-COb6PIBf.js";import"./resolveDefaultProps-C1NQQxfw.js";import"./pageBackground-CexaD8jP.js";import"./isWellBehavedNumber-BNoJVovK.js";import"./useId-BX-mSSik.js";import"./useBackwardsCompatibleTheme-CKzY57lx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DD8rlV_m.js";import"./index-CM4XLoJ2.js";import"./index-DkIcBYOu.js";import"./axisSelectors-E250IIX0.js";import"./throttle-BS7HrNsT.js";import"./d3-scale-BU1MyCto.js";import"./CartesianAxis-C-rsFQTF.js";import"./Layer-DK2FwCPg.js";import"./types-B-rYYW-g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CwZjK2uF.js";import"./index-Co9bt_zj.js";import"./index-BZmySJQF.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Cglq1y_f.js";import"./index-CyzL3WIR.js";import"./CartesianChart-DJ8n3cc1.js";import"./chartDataContext-CJdXqT5i.js";import"./CategoricalChart-Dsw_Culz.js";import"./Symbols-8udjdX-_.js";import"./symbol-CxL7yEpn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DTnbgc86.js";import"./uniqBy-BuCtx4yQ.js";import"./iteratee-B4Qh_7Gw.js";import"./activeStyles-DMsULg9O.js";import"./useAnimationId-CFtssWv7.js";import"./dataEntryStyles-DWwC517V.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KMUMkJf8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-s8ySMG5_.js";import"./tooltipContext-CKCWbFvb.js";import"./ErrorBarContext-CpX10Uwr.js";import"./GraphicalItemClipPath-BFBWrIDQ.js";import"./SetGraphicalItem-BBlb6zhf.js";import"./getZIndexFromUnknown-DTItsiUg.js";import"./useEffectiveDataKey-BCzrZ4XH.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
