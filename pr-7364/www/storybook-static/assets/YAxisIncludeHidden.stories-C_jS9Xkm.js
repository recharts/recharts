import{u as f,e}from"./iframe-Cv0qW2ko.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-B0w9h5lM.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-dw2UPZEJ.js";import{C}from"./ComposedChart-smS6LLp1.js";import{X as K}from"./XAxis-BT82JTqb.js";import{L as v}from"./Legend-DddRhEKx.js";import{B as s}from"./Bar-DcLFma-t.js";import{R as x}from"./RechartsHookInspector-CkUp2GTc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BZyagfMs.js";import"./Layer-CsQNRvLO.js";import"./resolveDefaultProps-Do4zKK3Y.js";import"./Text-DZAUevoT.js";import"./DOMUtils-CHQYQ4Y1.js";import"./Label-BMEmaXKp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DcdIn6Lk.js";import"./zIndexSlice-CHCTzA5s.js";import"./immer-BQQ92H22.js";import"./types-D0-2-__S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BOF6sMGg.js";import"./hooks-CJSe3LTj.js";import"./axisSelectors-C2eMQvfK.js";import"./d3-scale-Dsb1SLZO.js";import"./RechartsWrapper-dCBWaPWI.js";import"./index-B3dmmAiW.js";import"./CartesianChart-DqdcaXnI.js";import"./chartDataContext-Cp9nHQ3M.js";import"./CategoricalChart-QPWmKUQ6.js";import"./Symbols-BZ1fsnkh.js";import"./symbol-C6znSeY2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DvAKpVC2.js";import"./uniqBy-DEfTIPXQ.js";import"./iteratee-BiY_dFh3.js";import"./tooltipContext-CsKp6SzJ.js";import"./ReactUtils-pum_VzDZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-vIAq55MV.js";import"./useAnimationId-CYCjPTVx.js";import"./ActiveShapeUtils-DtjFfAfB.js";import"./RegisterGraphicalItemId-DphlggEW.js";import"./ErrorBarContext-DcaWRm0D.js";import"./GraphicalItemClipPath-CyQi9Ewc.js";import"./SetGraphicalItem-tehWRJf-.js";import"./getZIndexFromUnknown-CP5txwPd.js";import"./graphicalItemSelectors-Dq86ZHmz.js";import"./index-DGomxYSM.js";import"./ChartSizeDimensions-CCGNwFzu.js";import"./OffsetShower-CKkYdDnc.js";import"./PlotAreaShower-DEg1EoJ-.js";const He={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,He as default};
