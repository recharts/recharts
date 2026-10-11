import{r as f,R as e}from"./iframe-PFnyvlis.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B7MGVxIC.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B0qSSbxG.js";import{C as k}from"./ComposedChart-CYoxv7K5.js";import{X as K}from"./XAxis-DhJ_whev.js";import{L as v}from"./Legend-Ci_zbGqr.js";import{B as a}from"./Bar-jsNT1kq-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CHf8Dh9F.js";import"./Text-Bjtm-BnX.js";import"./resolveDefaultProps-w5xflEp3.js";import"./pageBackground-D9EVWege.js";import"./isWellBehavedNumber-fJrag4D_.js";import"./useId-B6VTORgN.js";import"./useBackwardsCompatibleTheme-BHl7LW2d.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4ISEqyM.js";import"./index-Bnt3KeU-.js";import"./index-sAeTipYl.js";import"./RechartsWrapper-B3E-J46N.js";import"./axisSelectors-DhkVgott.js";import"./throttle-GW0_gATC.js";import"./d3-scale-Ct392CQc.js";import"./index-D5l8ABkB.js";import"./index-Cd7PqRR0.js";import"./renderedTicksSlice-CEcKwYs8.js";import"./index-Bz4JWd5z.js";import"./CartesianAxis-D8jcLweO.js";import"./Layer-8HYYz2ZX.js";import"./types-Cdq40KHv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CsLYaxaY.js";import"./chartDataContext-DOm0tmmB.js";import"./CategoricalChart-C-GflChV.js";import"./Symbols-Bca_e3aR.js";import"./symbol-BWUUdokJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B06hB-J_.js";import"./uniqBy-BFzf7hr-.js";import"./iteratee-i8eYuUbO.js";import"./activeStyles-DeGfiuQP.js";import"./useAnimationId-E_cgqRBb.js";import"./dataEntryStyles-DVpontPM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BVeyAWJr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-1mgFNr1z.js";import"./tooltipContext--B4s3Fka.js";import"./ErrorBarContext-C5e-NQj7.js";import"./GraphicalItemClipPath-Bhp27ob6.js";import"./SetGraphicalItem-TVDRdMaU.js";import"./getZIndexFromUnknown-Bkf99BFy.js";import"./useGraphicalItemIdentity-YcO-x1ZM.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
