import{r as f,R as e}from"./iframe-CbiyPpOQ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DQOVOwqz.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CpGqLNgf.js";import{C as k}from"./ComposedChart-Ml_tEQsO.js";import{X as K}from"./XAxis-DS8USeJo.js";import{L as v}from"./Legend-YkVdeRnw.js";import{B as s}from"./Bar-BouTTpnM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DdhiMqO2.js";import"./Layer-DqgjT4E-.js";import"./resolveDefaultProps-BWAgYfPV.js";import"./Text-6JPkC2Bj.js";import"./DOMUtils-Db0o8Zdl.js";import"./isWellBehavedNumber-CgYUMQU-.js";import"./Label-Bqdiqqm9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BdQyI4NS.js";import"./index-DN_zLXSU.js";import"./index-DyGRF9jX.js";import"./types-CzM6FhOK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-lYU8ut4F.js";import"./throttle-qq70w1DA.js";import"./RechartsWrapper-TOXK1lwb.js";import"./index-Bca_d3DG.js";import"./index-D-fswtUu.js";import"./axisSelectors-CCqDM7T-.js";import"./d3-scale-Bap3CkU2.js";import"./CartesianChart-DS8MRKt-.js";import"./chartDataContext-Bznw4op9.js";import"./CategoricalChart-l1FuTysV.js";import"./Symbols-BWn15Mkk.js";import"./symbol-B7SK3bHu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-9aMbp_tO.js";import"./uniqBy-DQFa7_m1.js";import"./iteratee-B4yI5Ocl.js";import"./tooltipContext-D9Ob8Rj7.js";import"./AnimatedItems-DRdB4DWi.js";import"./useAnimationId-BzqZ1CPr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CwDyS8Ci.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CSCl1dIf.js";import"./RegisterGraphicalItemId-DWEdhGSI.js";import"./ErrorBarContext-BC0_okWx.js";import"./GraphicalItemClipPath-Bzcd_Jhp.js";import"./SetGraphicalItem-DrfGre3X.js";import"./getZIndexFromUnknown--k_DY_ey.js";import"./graphicalItemSelectors-BRH2XptT.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
