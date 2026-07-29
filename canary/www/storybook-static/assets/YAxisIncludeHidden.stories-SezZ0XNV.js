import{r as f,R as e}from"./iframe-D2OYENKH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BOZmPEET.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D0ZhXs4m.js";import{C as k}from"./ComposedChart-BUAOSrLk.js";import{X as K}from"./XAxis-Pkmtv0hr.js";import{L as v}from"./Legend-B_Rub_BT.js";import{B as s}from"./Bar-XRERlgVh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BhTPc9li.js";import"./Text-Dw3wOnD-.js";import"./resolveDefaultProps-dYsmKBqC.js";import"./DOMUtils-DDs_Dfl9.js";import"./isWellBehavedNumber-CA6K8V7o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cf4JaxIV.js";import"./index-Dur45csw.js";import"./index-DuPaBThV.js";import"./RechartsWrapper-BWgpx-pN.js";import"./index-JR3rJPe5.js";import"./index-CVAOKIGV.js";import"./throttle-Bn9pRQ9R.js";import"./renderedTicksSlice-CAJ7-KA1.js";import"./axisSelectors-D5cpRxU3.js";import"./d3-scale-BX-yZ5Fv.js";import"./CartesianAxis-BVkShzhs.js";import"./Layer-D9vccuwA.js";import"./types-CP4OIotA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-B2FvzarN.js";import"./isBuffer-Crkas5dz.js";import"./CartesianChart-D90Zb4X0.js";import"./chartDataContext-BdJZhmRg.js";import"./CategoricalChart-UC5rHyt5.js";import"./Symbols-zZY-dgPF.js";import"./symbol-B4rpbFe-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CLBcQN83.js";import"./uniqBy-P6iSPcSj.js";import"./iteratee-1U3upCJW.js";import"./tooltipContext-C-XBREnG.js";import"./AnimatedItems-DmNuH65D.js";import"./useAnimationId-INjmlW7n.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xLYCPX3G.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CzcMe4-S.js";import"./RegisterGraphicalItemId-B9FhgBpj.js";import"./ErrorBarContext-DK9yojOq.js";import"./GraphicalItemClipPath-BwblPJrN.js";import"./SetGraphicalItem-CS5ycuRe.js";import"./getZIndexFromUnknown-cT8oalqS.js";import"./graphicalItemSelectors-DRcaZtCR.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
