import{r as f,R as e}from"./iframe-ChdTnuJZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BUBRSx7t.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DTuHfx_p.js";import{C as k}from"./ComposedChart-BLgRXBFB.js";import{X as K}from"./XAxis--3XEHI4a.js";import{L as v}from"./Legend-C4C0gtl-.js";import{B as s}from"./Bar-1Qzh7UMz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BljYdgC6.js";import"./CartesianAxis-DeJGk3LW.js";import"./Layer-CbZTDJjb.js";import"./resolveDefaultProps-CmZ2lQdU.js";import"./Text-BqDkAbeE.js";import"./DOMUtils-BvzDzAj2.js";import"./isWellBehavedNumber-CwWlLsdj.js";import"./Label-ODDr4Kfk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DzezyKwN.js";import"./index-DteGnOzp.js";import"./index-Dq9WTpJB.js";import"./types-Blkff1hk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-IsDkktPX.js";import"./immer-DHJNVAe2.js";import"./RechartsWrapper-VmQ82j3S.js";import"./index-Dl7IIVL4.js";import"./index-BnBFbJTw.js";import"./axisSelectors-UyjPZuEn.js";import"./d3-scale-Ch-uXsQ6.js";import"./CartesianChart-DV13kS8z.js";import"./chartDataContext-COA3hxu-.js";import"./CategoricalChart-JBgYyUd3.js";import"./Symbols-kG2zlxxy.js";import"./symbol-j9t4dhdn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-EA0CDPIO.js";import"./uniqBy-XDLsRfro.js";import"./iteratee-DZC8fA35.js";import"./tooltipContext-YyJGWWFy.js";import"./AnimatedItems-BDYJ2E_L.js";import"./useAnimationId-w9_6HKPK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C4VesXv4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-t-acR5v1.js";import"./RegisterGraphicalItemId-BcQylArw.js";import"./ErrorBarContext-CZ-WTEC7.js";import"./GraphicalItemClipPath-D0CBaYt_.js";import"./SetGraphicalItem-Dx80ZtIC.js";import"./getZIndexFromUnknown-B7eKOIAo.js";import"./graphicalItemSelectors-CN8u0mca.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
