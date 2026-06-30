import{r as f,R as e}from"./iframe-DJHXlrGw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BulSHvtc.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CFaJnUYw.js";import{C as k}from"./ComposedChart-c9TgP79T.js";import{X as K}from"./XAxis-Bazc91VB.js";import{L as v}from"./Legend-BJ-Clvso.js";import{B as s}from"./Bar-BFP9b6cK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-j_9LvNGC.js";import"./CartesianAxis-CkFZLbcD.js";import"./Layer-DZpjcI0F.js";import"./resolveDefaultProps-CeQOO-Pe.js";import"./Text-CRISoaMT.js";import"./DOMUtils-R0ltg_fS.js";import"./isWellBehavedNumber-Czb4zvRP.js";import"./Label-R2VOv6mw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-KkfMfF_A.js";import"./index-BPz6-png.js";import"./index-DwRJQzwD.js";import"./types-vAWUzS0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BKsRhTz6.js";import"./throttle-DAd10cPx.js";import"./RechartsWrapper-DkeMmjUq.js";import"./index-DwS8J4hC.js";import"./index-Be4tbGBe.js";import"./axisSelectors-ClcXvPv0.js";import"./d3-scale-DpYCNPeY.js";import"./CartesianChart-BtZogvmq.js";import"./chartDataContext-CJXmJdS8.js";import"./CategoricalChart-BtoYqjdS.js";import"./Symbols-CyeV-LI-.js";import"./symbol-Dm5QNlld.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CFTv--jx.js";import"./uniqBy-BVl6QLa6.js";import"./iteratee-BhdXRguK.js";import"./tooltipContext-C3r2TNgA.js";import"./AnimatedItems-BgKM4093.js";import"./useAnimationId-CR2wKsf0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Z1GABkaC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CSLmPB1h.js";import"./RegisterGraphicalItemId-Dmdqk05n.js";import"./ErrorBarContext-DLSy_XzC.js";import"./GraphicalItemClipPath-Cd-sqkad.js";import"./SetGraphicalItem-BYhVDRYC.js";import"./getZIndexFromUnknown-DGvsYVYA.js";import"./graphicalItemSelectors-DekV_TLp.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
