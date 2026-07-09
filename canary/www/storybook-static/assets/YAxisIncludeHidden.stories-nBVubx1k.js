import{r as f,R as e}from"./iframe-1WG2GaGK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DhndnEIx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cov-NdD7.js";import{C as k}from"./ComposedChart-oCH7LOuc.js";import{X as K}from"./XAxis-B48KuXEj.js";import{L as v}from"./Legend-Duop5GXq.js";import{B as s}from"./Bar-BFiasIYW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CtKdIdzU.js";import"./Layer-DBIGyDPn.js";import"./resolveDefaultProps-B25CKbLH.js";import"./Text-Dz3dqWjs.js";import"./DOMUtils-BEiFehcN.js";import"./isWellBehavedNumber-B8fKCwi6.js";import"./Label-C04bXC5p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DViTPcza.js";import"./index-5AmNG6XU.js";import"./index-B9GM_nGd.js";import"./types-CoEQwN0Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-yo2RGDNB.js";import"./throttle-CilGSGoA.js";import"./RechartsWrapper-DEOyl0D-.js";import"./index-VHVhx1s3.js";import"./index-4UOu-PIF.js";import"./axisSelectors-Z8eCsImY.js";import"./d3-scale-CmojMi_E.js";import"./CartesianChart-Zn47P4p1.js";import"./chartDataContext-D8DLudE3.js";import"./CategoricalChart-SqRjK-fv.js";import"./Symbols-BlVo0R4U.js";import"./symbol-BnNCQHpU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CzZdzVLP.js";import"./uniqBy-gRFmhWu-.js";import"./iteratee-CT0EjMPh.js";import"./tooltipContext-CvmqRbub.js";import"./AnimatedItems-4pikexb5.js";import"./useAnimationId-CnlBu4wu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CSfdiBYy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--OE9DBaA.js";import"./RegisterGraphicalItemId-kBJx_8Si.js";import"./ErrorBarContext-odKApO7t.js";import"./GraphicalItemClipPath-CPz3ISZ8.js";import"./SetGraphicalItem-C1oEpLce.js";import"./getZIndexFromUnknown-C8R2uKac.js";import"./graphicalItemSelectors-BER8UMX1.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
