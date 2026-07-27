import{r as f,R as e}from"./iframe-DX3DoU0V.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-eJYuoSOp.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-JZscBD-4.js";import{C as k}from"./ComposedChart-DhxdekQU.js";import{X as K}from"./XAxis-CymymjPS.js";import{L as v}from"./Legend-C0PKEmxT.js";import{B as s}from"./Bar-CbtwD6ve.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bl7vCDUz.js";import"./Layer-CfDkJPJv.js";import"./resolveDefaultProps-Dht9eep2.js";import"./Text-CGNeItsO.js";import"./DOMUtils-jkxXqBeu.js";import"./isWellBehavedNumber-DXPAUxYw.js";import"./Label-CcOENmHR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dcm0gV7H.js";import"./index-C9zXapq5.js";import"./index-BLWyFYv6.js";import"./types-CkeZP30w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C2lqyVGO.js";import"./throttle-Df9paSU5.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Cor7Wz0Q.js";import"./index-fiTNjDfz.js";import"./index-dfS5pTPx.js";import"./axisSelectors-CPexRmiS.js";import"./d3-scale-cmuGZbi0.js";import"./CartesianChart-DAdEh2n_.js";import"./chartDataContext-KL4_rbFV.js";import"./CategoricalChart-COC9nxGS.js";import"./Symbols-D_BkDMQb.js";import"./symbol-DJQhYLZr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BuK6NTey.js";import"./uniqBy-B4dKXf3c.js";import"./iteratee-CB7cTIhH.js";import"./tooltipContext-B8gNCXNL.js";import"./AnimatedItems-azUMJ4jR.js";import"./useAnimationId-2LcPTVkH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BknJ5SeS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C5RQzc-i.js";import"./RegisterGraphicalItemId-Dlzi8iuz.js";import"./ErrorBarContext-UMJzk-jC.js";import"./GraphicalItemClipPath-BLXFrLs-.js";import"./SetGraphicalItem-C1_wN2SK.js";import"./getZIndexFromUnknown-Bymqfo9L.js";import"./graphicalItemSelectors-BlsH2ULy.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
