import{r as f,R as e}from"./iframe-BhYIBUmE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BDjlgMSD.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-iZ75WhkA.js";import{C as k}from"./ComposedChart-CSJIRxEz.js";import{X as K}from"./XAxis-B9ZJYuv4.js";import{L as v}from"./Legend-DSTqIi7C.js";import{B as s}from"./Bar-BihGmuDI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D47H33vb.js";import"./Layer-Di4CjYT0.js";import"./resolveDefaultProps-BDtRZXkF.js";import"./Text-DvhjqfeR.js";import"./DOMUtils-0OARPr3L.js";import"./isWellBehavedNumber-XdoKmyaC.js";import"./Label-D4aavVkg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DzEhLRNI.js";import"./index-DEEvK7wS.js";import"./index-D-p5hhZ6.js";import"./types-98-DlTag.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BvbBXc0R.js";import"./throttle-Y6Q35rOn.js";import"./RechartsWrapper-DQUmtvyG.js";import"./index-BoNxyHn5.js";import"./index-B02QR74t.js";import"./axisSelectors-XMI2B6JU.js";import"./d3-scale-Ca87_qMg.js";import"./CartesianChart-CnNFNMoi.js";import"./chartDataContext-DqiOTlWU.js";import"./CategoricalChart-DhAV5rxK.js";import"./Symbols-pEWRNwOG.js";import"./symbol-CZbvwugO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CSXMIDAf.js";import"./uniqBy-Br7Gv2yg.js";import"./iteratee-B989Z8v9.js";import"./tooltipContext-IsDItl8-.js";import"./AnimatedItems-BLN0wGQm.js";import"./useAnimationId-BPiSh6IJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZ1mXMev.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Di4Bw8dO.js";import"./RegisterGraphicalItemId-BXUxqLaU.js";import"./ErrorBarContext-CcwUloBe.js";import"./GraphicalItemClipPath-gTOFxICa.js";import"./SetGraphicalItem-ZzJW--aO.js";import"./getZIndexFromUnknown-6pIDRAPI.js";import"./graphicalItemSelectors-CadEeGVz.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
