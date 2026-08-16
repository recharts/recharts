import{r as f,R as e}from"./iframe-Dc8RWhrw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DMp-u3Mu.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cue9wPom.js";import{C as k}from"./ComposedChart-Da7iSmDy.js";import{X as K}from"./XAxis-VfLZ80on.js";import{L as v}from"./Legend-DzwEZ1vL.js";import{B as s}from"./Bar-DxpQnQwd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DGIRTg37.js";import"./Text-rfXwlvlz.js";import"./resolveDefaultProps-CQDlpFo_.js";import"./DOMUtils-DSrFB3FI.js";import"./isWellBehavedNumber-DkJxcyfZ.js";import"./useBackwardsCompatibleTheme-CTZrd8Ez.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPoBYBwu.js";import"./index-BX7yfnHr.js";import"./index-DHKxMT0C.js";import"./RechartsWrapper-Ba4_XV41.js";import"./index-BjTDJtXe.js";import"./index-D_nZwztl.js";import"./throttle-Cgdnnn4b.js";import"./axisSelectors-Bp8YmQgj.js";import"./d3-scale-DDaZL63N.js";import"./renderedTicksSlice-CNJBn7mW.js";import"./CartesianAxis-l76NyjyY.js";import"./Layer-Cp8eUZax.js";import"./types-D48DJ4qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B63GIjUf.js";import"./chartDataContext-DlTklTQC.js";import"./CategoricalChart-CI6oyNVX.js";import"./Symbols-GzXlAdpY.js";import"./symbol-DU6b7_X7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHGkrUt4.js";import"./uniqBy-Di3gtafg.js";import"./iteratee-UaQdxZu-.js";import"./tooltipContext-ChMsabnz.js";import"./AnimatedItems-HOD2wt3W.js";import"./useAnimationId-ljtrSyr1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CIo59f_q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CqRtCd2Y.js";import"./RegisterGraphicalItemId-DxgWNIY4.js";import"./ErrorBarContext-Bc_XovT5.js";import"./GraphicalItemClipPath-vsH9TZYh.js";import"./SetGraphicalItem-Bhl9AfEO.js";import"./getZIndexFromUnknown-CtYufKb_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DQMHtU-4.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
