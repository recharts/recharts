import{r as f,R as e}from"./iframe-DYQm5pDK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CVSg61xk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CJYweGKN.js";import{C as k}from"./ComposedChart-BXbqeR3V.js";import{X as K}from"./XAxis-CZY80vys.js";import{L as v}from"./Legend-uHaRlLU1.js";import{B as s}from"./Bar-IQAk7hC0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-2fJkWQrM.js";import"./Text-BBWNQ9ND.js";import"./resolveDefaultProps-V2XetKb4.js";import"./DOMUtils-DI2U8hPw.js";import"./isWellBehavedNumber-Db1VnkRV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CYpXSJgQ.js";import"./index-D9641aDn.js";import"./index-CSHdKH08.js";import"./RechartsWrapper-gRpL_xKU.js";import"./index-B8vof7O1.js";import"./index-Dvf4xz5M.js";import"./throttle-Ctp9_qVa.js";import"./axisSelectors-CSPBywkg.js";import"./d3-scale-CuSyjdwU.js";import"./renderedTicksSlice-C_bKCtit.js";import"./CartesianAxis-DZAfkwU8.js";import"./Layer-BE5fWip9.js";import"./types-DMj2PdKG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BL-IAPcg.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-1bq5gRk4.js";import"./chartDataContext-Dp_kX4bj.js";import"./CategoricalChart-DNCs6fuc.js";import"./Symbols-P4A1ZIZ7.js";import"./symbol-CB2ASYk-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DeY_vqj5.js";import"./uniqBy-CK7b43Ay.js";import"./iteratee-Daur8jM2.js";import"./tooltipContext-BHSbnupy.js";import"./AnimatedItems-CRKAM_Pk.js";import"./useAnimationId-Dfuzx8c4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2cnIGYc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DDuLsW0U.js";import"./RegisterGraphicalItemId-CoopfHz0.js";import"./ErrorBarContext-BW9yLQD5.js";import"./graphicalItemIdentity-c8N24HJ4.js";import"./SetGraphicalItem-F1NAG8Fb.js";import"./getZIndexFromUnknown-ypmuN3X8.js";import"./graphicalItemSelectors-B1i3HIK9.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
