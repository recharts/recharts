import{r as f,R as e}from"./iframe-CxG2PZXj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B1kX2SHx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DAD_xoRY.js";import{C as k}from"./ComposedChart-D2cTWPQC.js";import{X as K}from"./XAxis-B4ycL0c8.js";import{L as v}from"./Legend-BAPAMVGJ.js";import{B as s}from"./Bar-BUstuzyH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis--mae7NqH.js";import"./Layer-Cge6P4R-.js";import"./resolveDefaultProps-DUaFgx3m.js";import"./Text-Cndr_sMa.js";import"./DOMUtils-D8hCt3_g.js";import"./isWellBehavedNumber-8T9tdyF1.js";import"./Label-Z4HB-UJ_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-kEwpMnQu.js";import"./index-DToZBGKP.js";import"./index-DiKZrp18.js";import"./types-Da-j7B5o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DK3Qh-AH.js";import"./throttle-BLzUd2wF.js";import"./RechartsWrapper-B0t_sSZG.js";import"./index-5B0X8Ccq.js";import"./index-DK4BYQS1.js";import"./axisSelectors-BOLkCBrq.js";import"./d3-scale-LDX-W-e5.js";import"./CartesianChart-DqtDQP9t.js";import"./chartDataContext-Cw7l7MNk.js";import"./CategoricalChart-Dozh9-kX.js";import"./Symbols-BwKJCYen.js";import"./symbol-B-j-jSQL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpY2ID8s.js";import"./uniqBy-BHBdLEDm.js";import"./iteratee-DVQ7CCFT.js";import"./tooltipContext-DLDHLsgR.js";import"./AnimatedItems-DqWCyLkw.js";import"./useAnimationId-D_YXQiTc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dg43H9ES.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CVhA8l6O.js";import"./RegisterGraphicalItemId-Cn9-4_hp.js";import"./ErrorBarContext-DRFeJFbi.js";import"./GraphicalItemClipPath-m4xLKPFC.js";import"./SetGraphicalItem-C-4LQBhg.js";import"./getZIndexFromUnknown-CllXp4pI.js";import"./graphicalItemSelectors-DIn3ebUY.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
