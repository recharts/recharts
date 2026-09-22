import{r as f,R as e}from"./iframe-V0uWMpm8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-t5K6SsBB.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DUX4TIf3.js";import{C as k}from"./ComposedChart-BN51dTxx.js";import{X as K}from"./XAxis-DRAr1kyY.js";import{L as v}from"./Legend-DJJvkBf-.js";import{B as a}from"./Bar-DAT6RXiU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-2hyP-tsc.js";import"./Text-CDsr0dRv.js";import"./resolveDefaultProps-aKGdeQK0.js";import"./DOMUtils-BW4dN_KI.js";import"./isWellBehavedNumber-MEUC6Th_.js";import"./useId--nrsw05H.js";import"./useBackwardsCompatibleTheme-CEplzgd4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DivbHHVg.js";import"./index-D_MUhraT.js";import"./index-DPqbft9D.js";import"./RechartsWrapper-CCLf8n2o.js";import"./axisSelectors-SQHKz4ZO.js";import"./throttle-CmD5MtuF.js";import"./d3-scale-BJHPeQPf.js";import"./index-kjeSN6uv.js";import"./index-3fJcv3y4.js";import"./renderedTicksSlice-DZhKT_zE.js";import"./index-SLBi9NdX.js";import"./CartesianAxis-DtLaMWrT.js";import"./Layer--mIrdw0x.js";import"./types-CDLzu-PR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DXwmQtN1.js";import"./chartDataContext-CQKtni77.js";import"./CategoricalChart-zmhxTVhd.js";import"./Symbols-ERS327yO.js";import"./symbol-iVBsO0Fb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CCBbejER.js";import"./uniqBy-Bb8a2JnS.js";import"./iteratee-n7wxeW7K.js";import"./AnimatedItems-BOhMHwpv.js";import"./useAnimationId-Dtpy8skx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-R42X70zL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CaWetUUl.js";import"./tooltipContext-B3OsVyP1.js";import"./RegisterGraphicalItemId-XrZ7XOK-.js";import"./ErrorBarContext-De7ujaEj.js";import"./GraphicalItemClipPath-B0v9QHui.js";import"./SetGraphicalItem-DNGP3yw2.js";import"./getZIndexFromUnknown-BO366-hP.js";import"./useGraphicalItemIdentity-BcaMYi1E.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
