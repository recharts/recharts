import{r as f,R as e}from"./iframe-HmoKwHFX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BdeggP_Q.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-6UlwHzZx.js";import{C as k}from"./ComposedChart-DNBXzl8_.js";import{X as K}from"./XAxis-Ckpvg_aw.js";import{L as v}from"./Legend-Dzt5tM9m.js";import{B as s}from"./Bar-CuTKV5Ml.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-sk3D75Jf.js";import"./Layer-DCuDnFq8.js";import"./resolveDefaultProps-BgbskIps.js";import"./Text-CF2LDoBf.js";import"./DOMUtils-DNQlLACq.js";import"./isWellBehavedNumber-ChlLFPsN.js";import"./Label-COwIarxU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wTJ88r9x.js";import"./index-DbZ1xFPe.js";import"./index-V8abjlH7.js";import"./types-DRVdcYGb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CKWPLZmb.js";import"./throttle-CggiDJGE.js";import"./RechartsWrapper-j2c0QQIE.js";import"./index-BOpt7wnK.js";import"./index-B9uDrVyK.js";import"./axisSelectors-BQeYBj0I.js";import"./d3-scale-BDs_cJTc.js";import"./CartesianChart-BAb-9k9W.js";import"./chartDataContext-DrbaCNot.js";import"./CategoricalChart-5OT8W9pW.js";import"./Symbols-B-ewiTIH.js";import"./symbol-nhwXymzI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ro_1jCxs.js";import"./uniqBy-Bi13QdTJ.js";import"./iteratee-CbkCzpv6.js";import"./tooltipContext-DTSgeDGx.js";import"./AnimatedItems-BP2JMedo.js";import"./useAnimationId-C1cJfoVB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dl7k0A5Q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0piQNROf.js";import"./RegisterGraphicalItemId-YabdkJxn.js";import"./ErrorBarContext-CsCjPd0P.js";import"./GraphicalItemClipPath-DDhZ52Wg.js";import"./SetGraphicalItem-R8P5CdUS.js";import"./getZIndexFromUnknown-BNld2ask.js";import"./graphicalItemSelectors-XBEF56zP.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
