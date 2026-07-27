import{r as f,R as e}from"./iframe-DsM5Snoh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-AiKtCrqX.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bw64GR0n.js";import{C as k}from"./ComposedChart-CAcZP5zH.js";import{X as K}from"./XAxis-BP59MRl4.js";import{L as v}from"./Legend-qZpYFHxv.js";import{B as s}from"./Bar-CwzjLEwS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CVbxoQSN.js";import"./Layer-DJ-_hZeS.js";import"./resolveDefaultProps-B889QW7F.js";import"./Text-DTpoJfmA.js";import"./DOMUtils-bol6pq_B.js";import"./isWellBehavedNumber-BL4XxRG3.js";import"./Label-COWFM_3h.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8J4UOhVH.js";import"./index-C1bUMSNa.js";import"./index-Cpv94xK3.js";import"./types-C3s_AHHw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C2lYgmQd.js";import"./throttle-BxJwdddW.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DCACJiBR.js";import"./index-DzyEvv1d.js";import"./index-Dme9ADAC.js";import"./axisSelectors-ZbRe1Fr2.js";import"./d3-scale-5xoUdZXJ.js";import"./CartesianChart-DHkgxIBG.js";import"./chartDataContext-ChNOSR4m.js";import"./CategoricalChart-C7zh0Rx-.js";import"./Symbols-BASV0N3J.js";import"./symbol-DgUa4s6j.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D3ItBwVb.js";import"./uniqBy-DHqhlZDI.js";import"./iteratee-C3LESQL9.js";import"./tooltipContext-BUP9beLh.js";import"./AnimatedItems-B9cLBWaU.js";import"./useAnimationId-C3tGSe4h.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BJ0VqAUA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Crk25mmB.js";import"./RegisterGraphicalItemId-B77AAmB8.js";import"./ErrorBarContext-SZrR3kne.js";import"./GraphicalItemClipPath-DkDzGEyf.js";import"./SetGraphicalItem-HftiDrim.js";import"./getZIndexFromUnknown-CJvTlMay.js";import"./graphicalItemSelectors-Bvrvqop5.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
