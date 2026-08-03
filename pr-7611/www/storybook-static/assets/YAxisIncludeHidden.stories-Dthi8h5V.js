import{r as f,R as e}from"./iframe-w1sUw1VE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DDPi_wRf.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BFtIIbIH.js";import{C as k}from"./ComposedChart-BjXbyHB1.js";import{X as K}from"./XAxis-Cjs911bp.js";import{L as v}from"./Legend-khSSA6cZ.js";import{B as s}from"./Bar-B-mQSUbS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DclIafX4.js";import"./Text-BMcE5w5g.js";import"./resolveDefaultProps-DsVHMq00.js";import"./DOMUtils-CT4eanyO.js";import"./isWellBehavedNumber-B6HqUKYK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BmjcQumE.js";import"./index-CKtl8pQB.js";import"./index-JAlJc66Y.js";import"./RechartsWrapper-kdFU-RZ0.js";import"./index-B50wbS8k.js";import"./index-DREvHpCt.js";import"./throttle-9uSjnkRJ.js";import"./renderedTicksSlice-BYSsRx-Z.js";import"./axisSelectors-Fjy06-Ct.js";import"./d3-scale-BNSttRgc.js";import"./CartesianAxis-CxEX_iq4.js";import"./Layer-B0FPP_Ev.js";import"./types-BKQwKiAc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-ws5do87s.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cpc3KnxA.js";import"./chartDataContext-Qn0Ey9bz.js";import"./CategoricalChart-DPuU_nkZ.js";import"./Symbols-BlaayCBT.js";import"./symbol-CiPnu7Sy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bq1Ge05V.js";import"./uniqBy-Dg36dhD9.js";import"./iteratee-DSG09e17.js";import"./tooltipContext-BqWyhGH_.js";import"./AnimatedItems-BO3fZMy0.js";import"./useAnimationId-oodeuVFJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-unJoww32.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_EfEkHZ.js";import"./RegisterGraphicalItemId-BXlJHdat.js";import"./ErrorBarContext-DxbwWYVa.js";import"./GraphicalItemClipPath-DIJRkSkT.js";import"./SetGraphicalItem-DINcEBZn.js";import"./getZIndexFromUnknown-DVbVS_c_.js";import"./graphicalItemSelectors-BVXGcCTk.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
