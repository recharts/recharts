import{r as f,R as e}from"./iframe-XIWN-8LW.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DaPhatN5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CeTDvnmV.js";import{C as k}from"./ComposedChart-FUL524Wp.js";import{X as K}from"./XAxis-xF4zDX5U.js";import{L as v}from"./Legend-uzuxOhM0.js";import{B as a}from"./Bar-BoK5fl6t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DO8sqqdZ.js";import"./Text-DltUF9fa.js";import"./resolveDefaultProps-B5b48pxf.js";import"./DOMUtils-CCpPdTbp.js";import"./ZIndexLayer-Bd21CySm.js";import"./index-aVJjGtUe.js";import"./index-BkVjohbh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DQxdihyW.js";import"./throttle-DRx8DeZx.js";import"./axisSelectors-Ct9ZEPSa.js";import"./d3-scale-BvS2o_Zb.js";import"./CartesianAxis-BxPz-Jvl.js";import"./Layer-CxaTRkgO.js";import"./types-CnZsW2lD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DpPQ5RFR.js";import"./index-CLmLkjoe.js";import"./index-DUogMgN_.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BeCgk11S.js";import"./index-pEcVg_GN.js";import"./fillDefinitions-BnpiLimK.js";import"./CartesianChart-Cb1xlur4.js";import"./ZIndexPortal-DjT5vY1_.js";import"./CategoricalChart-xnoIgStO.js";import"./Symbols-Cwdzyt52.js";import"./symbol-DWZ08l1L.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BeOaSn6a.js";import"./uniqBy-DWstni_N.js";import"./iteratee-D75QKWW0.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DPGWqLfL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-GJprns1h.js";import"./useAnimationId-BQkOAk0c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DHUczxG_.js";import"./tooltipContext--w90yek2.js";import"./dataEntryStyles-GFsHahL2.js";import"./ErrorBarContext-BZ9_Mv4V.js";import"./activeStyles-C-BzGRm8.js";import"./SetGraphicalItem-DypkohdD.js";import"./getZIndexFromUnknown-Cp4HeYf6.js";import"./useEffectiveDataKey-qss65ryL.js";import"./omit-COE3kS8C.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
