import{r as f,R as e}from"./iframe-HQzZVjBz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B3rEjge7.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CGQ7Au-h.js";import{C as k}from"./ComposedChart-CL_dGEsU.js";import{X as K}from"./XAxis-DRgGc3zf.js";import{L as v}from"./Legend-BkWpFG1S.js";import{B as a}from"./Bar-BjvwUTKZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CkcS20G_.js";import"./Text-BOeOqlf9.js";import"./resolveDefaultProps-FnTseFp7.js";import"./pageBackground-BMzh5QHA.js";import"./isWellBehavedNumber-CcswNJGt.js";import"./useId-CLiKfQI1.js";import"./useBackwardsCompatibleTheme-BydTEdxL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B9EFhzLD.js";import"./index-B-hjV7sb.js";import"./index-CoahYeeF.js";import"./axisSelectors-Pv4KR-zj.js";import"./throttle-CBKyBD78.js";import"./d3-scale-Bm5seH5s.js";import"./CartesianAxis-DqRUh5Lc.js";import"./Layer-CZF3Yvdy.js";import"./types-Bq-isVxM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBd_vSTQ.js";import"./index-Du00f8Ig.js";import"./index-Cd4WuegV.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CHbQgt_R.js";import"./index-DBkbRNLm.js";import"./CartesianChart-CBFKxon3.js";import"./chartDataContext-B1WnW-uC.js";import"./CategoricalChart-CFFTEefl.js";import"./Symbols-_dnyJZ42.js";import"./symbol-BbltfI5F.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHmZojEb.js";import"./uniqBy-Cq2YPL4f.js";import"./iteratee-CWwfWNkd.js";import"./activeStyles-Ctuz9FGV.js";import"./useAnimationId-D_-yy58E.js";import"./dataEntryStyles-CrN8We-Y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BjPRKiky.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BYEpmP72.js";import"./tooltipContext-vKvxN6XU.js";import"./ErrorBarContext-D0G_BuSS.js";import"./GraphicalItemClipPath-CmI_2v97.js";import"./SetGraphicalItem-CCrIsVeT.js";import"./getZIndexFromUnknown-eACrY9wN.js";import"./useEffectiveDataKey-DU6QRSRw.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
