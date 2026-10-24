import{r as f,R as e}from"./iframe-DIZ3O37q.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DKMrz6bp.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BQzkuVGb.js";import{C as k}from"./ComposedChart-D39bvl9W.js";import{X as K}from"./XAxis-B7HByjhZ.js";import{L as v}from"./Legend-CAnLgOej.js";import{B as a}from"./Bar-BTuM_D30.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BKiGyQaq.js";import"./Text-CxShOurV.js";import"./resolveDefaultProps-CZ7A5O_B.js";import"./pageBackground-RtZmpZCV.js";import"./isWellBehavedNumber-C03WQupV.js";import"./useId-JbG4rdAV.js";import"./useBackwardsCompatibleTheme-BOuG0K82.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpnduxRR.js";import"./index-v0zH_vno.js";import"./index-eN1sdWPw.js";import"./dataEntryStyles-DEoRHL3P.js";import"./axisSelectors-CgxEqo8X.js";import"./throttle-CmJg4BXK.js";import"./d3-scale-BsLoKPkH.js";import"./CartesianAxis-DyfvpSiZ.js";import"./Layer-dog9ZdZ9.js";import"./types-DIw8xebl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dPbGmcjH.js";import"./index-Cmvub_uM.js";import"./index-ywKEni0y.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DCqN-I2W.js";import"./index-DJHqlgJe.js";import"./CartesianChart-BArvePMg.js";import"./chartDataContext-DHk2uxah.js";import"./CategoricalChart-C-yl_Evz.js";import"./Symbols-D8Nhv3CR.js";import"./symbol-D49ZxeF-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BA2R_9BV.js";import"./uniqBy-CLXI3ykK.js";import"./iteratee-BTyFVxv_.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-heSOU5tv.js";import"./useAnimationId-1Ju_H0cm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CN_u7Ffv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CU9aD14w.js";import"./tooltipContext-BsZQFKFL.js";import"./RegisterGraphicalItemId-CU20DwEk.js";import"./ErrorBarContext-ttnhO46D.js";import"./SetGraphicalItem-BH1Y0jBy.js";import"./getZIndexFromUnknown-BwBDoaYK.js";import"./useEffectiveDataKey-CsQCtOFi.js";import"./omit-DJK5XhUl.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
