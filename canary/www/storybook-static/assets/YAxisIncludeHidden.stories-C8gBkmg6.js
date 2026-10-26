import{r as f,R as e}from"./iframe-nnpNEl0c.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-EeSB_m0u.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BIxplyvp.js";import{C as k}from"./ComposedChart-CNqzZLnk.js";import{X as K}from"./XAxis-DmxowzrZ.js";import{L as v}from"./Legend-DhFd6Kcx.js";import{B as a}from"./Bar-BUH7Dk3-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-tyPo7vJI.js";import"./Text-D0rrhxSu.js";import"./resolveDefaultProps-D1Co5jVK.js";import"./pageBackground-BLVyr9N2.js";import"./ZIndexLayer-BDSIPNIK.js";import"./index-B_vNRzQ4.js";import"./index-BjMcvTtw.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-jvUDxmEV.js";import"./throttle-CIO-2ra4.js";import"./dataEntryStyles-BmV4LTxI.js";import"./axisSelectors-DWnmhIgM.js";import"./d3-scale-WiXCw0il.js";import"./CartesianAxis-BqAJOGeS.js";import"./Layer-CzHD4ald.js";import"./types-BmjMrM54.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BMWsCoi3.js";import"./index-Db30zo8R.js";import"./index-DcZvMf-G.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-VFnYK8V7.js";import"./index-CONo-L8r.js";import"./CartesianChart-CujBFFkW.js";import"./ZIndexPortal-Cp9AMkdy.js";import"./CategoricalChart-BMMRGjAS.js";import"./Symbols-B8oOAKpP.js";import"./symbol-OKw49DjP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D4m3W9N6.js";import"./uniqBy-BtFmVpwe.js";import"./iteratee-DDsc37Zm.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BNO7oHuM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bTnZwyFx.js";import"./useAnimationId-CJPhZ8Cq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRqheEEB.js";import"./tooltipContext-CNUm5XLj.js";import"./RegisterGraphicalItemId-DWpzbaDo.js";import"./ErrorBarContext-BjOiJE8k.js";import"./activeStyles-iZJvEVBW.js";import"./SetGraphicalItem-CRQScpdw.js";import"./getZIndexFromUnknown-DnFkOJYD.js";import"./useEffectiveDataKey-DTKrhjFl.js";import"./omit-ZiBFwhNr.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
