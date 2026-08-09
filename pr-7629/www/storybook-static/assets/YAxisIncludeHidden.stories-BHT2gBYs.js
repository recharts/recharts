import{r as f,R as e}from"./iframe-CMWK1RnV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BW66Z7F1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BytvSaR0.js";import{C as k}from"./ComposedChart-C24U-VBD.js";import{X as K}from"./XAxis-DWpQtd1t.js";import{L as v}from"./Legend-BDXq2L1_.js";import{B as s}from"./Bar-DORW_z4i.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D4xT1rG9.js";import"./Text-CsZIDzps.js";import"./resolveDefaultProps-phMwPKZe.js";import"./DOMUtils-BcIZbNLs.js";import"./isWellBehavedNumber-CyyUOQdm.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaLkAJUw.js";import"./index-AeW_NqGc.js";import"./index-Syzk9fQZ.js";import"./RechartsWrapper-BeDYcqlN.js";import"./index-y1rMs8xl.js";import"./index-D8xGdR5e.js";import"./throttle-DHHUYikL.js";import"./axisSelectors-BgzJH9qY.js";import"./d3-scale-CPniq2Ig.js";import"./renderedTicksSlice-X6zEnROV.js";import"./CartesianAxis-B04cLUP1.js";import"./Layer-CCdAbzHQ.js";import"./types-ClsmN4lT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-oN75whkn.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CFORAsRI.js";import"./chartDataContext-LElJR2nd.js";import"./CategoricalChart-JJ_xXB-S.js";import"./Symbols-REW61yy0.js";import"./symbol-NEJJ3FKS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DE11cRod.js";import"./uniqBy-B-JKIk0o.js";import"./iteratee-Bh0t3XA2.js";import"./tooltipContext-BQwSbn-k.js";import"./AnimatedItems-Bq0RY7UB.js";import"./useAnimationId-McaNs9se.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcMV1lU1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CDGNe_G8.js";import"./RegisterGraphicalItemId-DLOCgd05.js";import"./ErrorBarContext-DX33Jely.js";import"./graphicalItemIdentity-CeQSeT3p.js";import"./SetGraphicalItem-DoQBw7Cq.js";import"./getZIndexFromUnknown-D-O3eTyD.js";import"./graphicalItemSelectors-BJjgf2A_.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
