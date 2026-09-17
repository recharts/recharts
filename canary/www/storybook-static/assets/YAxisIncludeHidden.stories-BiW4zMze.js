import{r as f,R as e}from"./iframe-DwjhlfMW.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DCYSznIj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B1eqx357.js";import{C as k}from"./ComposedChart-Bfl28-Ka.js";import{X as K}from"./XAxis-BypJb1q6.js";import{L as v}from"./Legend-gWXLlJGR.js";import{B as a}from"./Bar-BwVjV1PL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CDX3QCgQ.js";import"./Text-Fn7sKK4t.js";import"./resolveDefaultProps-CEwq-pLy.js";import"./DOMUtils-DNcH8Otg.js";import"./isWellBehavedNumber-Ck5vetYF.js";import"./useId-CjpXrJxi.js";import"./useBackwardsCompatibleTheme-B5uR-87m.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D63gMRTb.js";import"./index-DEuGyOjS.js";import"./index-BGwBnv2j.js";import"./RechartsWrapper-DfYeCvHJ.js";import"./axisSelectors-BLfWrXUN.js";import"./throttle-KAp-qu0T.js";import"./d3-scale-ONQE_M5R.js";import"./index-1dx-TPak.js";import"./index-u7UrDuUK.js";import"./renderedTicksSlice-CYiI8XB-.js";import"./index-Di1osVNT.js";import"./CartesianAxis-_QUC34Jt.js";import"./Layer-Pu2wX4UR.js";import"./types-BUORd8J7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-nX1tU7iU.js";import"./chartDataContext-CIXOSwbU.js";import"./CategoricalChart-C8RwzjmY.js";import"./Symbols-R_SCtZ3-.js";import"./symbol-DFabtwEx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B8BeAmNT.js";import"./uniqBy-Dn3cwCom.js";import"./iteratee-Bva8E26b.js";import"./AnimatedItems-0LuF_asA.js";import"./useAnimationId-AvDok9ug.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cug13k1c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CRTLiydv.js";import"./tooltipContext-DeT4dGIe.js";import"./RegisterGraphicalItemId-LQahHGMW.js";import"./ErrorBarContext-D4j3Tcrr.js";import"./GraphicalItemClipPath-HnyZhYrt.js";import"./SetGraphicalItem-Ci5JV0yp.js";import"./getZIndexFromUnknown-BRqqzz0G.js";import"./useGraphicalItemIdentity-DLGtb43T.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
