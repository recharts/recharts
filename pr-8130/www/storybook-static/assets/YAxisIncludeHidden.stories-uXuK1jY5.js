import{r as f,R as e}from"./iframe-BV4BJT-m.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DrgVb9Ay.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B-lthx1D.js";import{C as k}from"./ComposedChart-CPNwWKj6.js";import{X as K}from"./XAxis-Dddiy3kS.js";import{L as v}from"./Legend-D02jVJyb.js";import{B as a}from"./Bar-DO37x2do.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-xll97smN.js";import"./Text-CO85_-F3.js";import"./resolveDefaultProps-cT9z_f7M.js";import"./DOMUtils-CzRokdgO.js";import"./ZIndexLayer-B03KVd1Z.js";import"./index-BWsZwQHL.js";import"./index-BMMrxHO4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CB1xu3bt.js";import"./throttle-2G-03cGC.js";import"./axisSelectors-DnTNEhev.js";import"./d3-scale-9I0ClQu9.js";import"./CartesianAxis-D1XYtW-z.js";import"./Layer-C4zlYTAs.js";import"./types-CgGLncla.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-un3BJh88.js";import"./index-Cwzrr77V.js";import"./index-CwDo1ygF.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BCKkTVf1.js";import"./index-BO-EQm5K.js";import"./fillDefinitions-CsvVa8gn.js";import"./CartesianChart-D730y8QU.js";import"./ZIndexPortal-DvrYxin1.js";import"./CategoricalChart-BPH2EWzV.js";import"./Symbols-D8__1CQa.js";import"./symbol-CNlre4TP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DOPUcnVK.js";import"./uniqBy-D2Xk11H0.js";import"./iteratee-BIIV1qIF.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-B3uF9y0j.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtlT2XYk.js";import"./useAnimationId-BaOUwCNw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DdIRCGmC.js";import"./tooltipContext-GDisYEj5.js";import"./dataEntryStyles-Bs_-V5Jc.js";import"./ErrorBarContext-CgppqQDQ.js";import"./activeStyles-DPABJUlt.js";import"./SetGraphicalItem-BojvnrYu.js";import"./getZIndexFromUnknown-DopZR3Lo.js";import"./useEffectiveDataKey-ydzJPEOM.js";import"./omit-Kyb53XVe.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
