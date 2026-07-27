import{r as f,R as e}from"./iframe-C_py9VKy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-1vUjo3Fh.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CXPNbLh0.js";import{C as k}from"./ComposedChart-Dh9zcQ5L.js";import{X as K}from"./XAxis-BQTm69sE.js";import{L as v}from"./Legend-C9QuHw3N.js";import{B as s}from"./Bar-DJUBgmNl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DS2REUGr.js";import"./Layer-CJpPulsx.js";import"./resolveDefaultProps-DKxyIA_C.js";import"./Text-CnffV04t.js";import"./DOMUtils-B2RmK7a8.js";import"./isWellBehavedNumber-wktK8CV7.js";import"./Label-DaE8MMQO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-cfs89nNi.js";import"./index-om3Avrtj.js";import"./index-DFxAgAdx.js";import"./types-BjPO6Abx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-XRbHFGyF.js";import"./throttle-y-97qzKM.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CyYB6xNR.js";import"./index-ConrPCjE.js";import"./index-B6PDA8Su.js";import"./axisSelectors-B-GKTKT_.js";import"./d3-scale-pH2VCnNX.js";import"./CartesianChart-Dc2BthVN.js";import"./chartDataContext-CG11iTCQ.js";import"./CategoricalChart-DJCSwk8E.js";import"./Symbols-BRpNQush.js";import"./symbol-BeAdi3ON.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Z_Rs-D5L.js";import"./uniqBy-DjIUo5Dj.js";import"./iteratee-ZqN9mw6Q.js";import"./tooltipContext-Bu0nve_k.js";import"./AnimatedItems-BApiggtL.js";import"./useAnimationId-BmA3o4RX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dwgjvbsc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-SIhXzT4o.js";import"./RegisterGraphicalItemId-BKPrbhTB.js";import"./ErrorBarContext-SwQJmcJ0.js";import"./GraphicalItemClipPath-oE60EnJf.js";import"./SetGraphicalItem-B_lgAFV8.js";import"./getZIndexFromUnknown-CVsUYSi-.js";import"./graphicalItemSelectors-RdnKikYv.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
