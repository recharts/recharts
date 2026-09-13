import{r as f,R as e}from"./iframe-CpojRMYz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-emyLb2hw.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D1ADf7PX.js";import{C as k}from"./ComposedChart-B6PO2aMu.js";import{X as K}from"./XAxis-DrbaoPhb.js";import{L as v}from"./Legend-C46ihdLT.js";import{B as a}from"./Bar-CBueyJ60.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C3-HdBMA.js";import"./Text-l7Cxp-9T.js";import"./resolveDefaultProps-CNOzu_Ry.js";import"./DOMUtils-Bwqm48A6.js";import"./isWellBehavedNumber-BniOqqpx.js";import"./useId-C7t9aAMg.js";import"./useBackwardsCompatibleTheme-Bsz0EdPH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-7f5E7Q4l.js";import"./index-BgVRD4HK.js";import"./index-DmdfXUBp.js";import"./RechartsWrapper-CF4JxjLb.js";import"./axisSelectors-BWpXFhCq.js";import"./throttle-2TOI5CL8.js";import"./d3-scale-BG2fjhI8.js";import"./index-Bx6QmfM2.js";import"./index-CHj19sxw.js";import"./renderedTicksSlice-DOd1w8ZM.js";import"./index-B9WJdOhz.js";import"./CartesianAxis-BQyqi4qL.js";import"./Layer-CCaY3a6J.js";import"./types-BBXJ7Rux.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DX0hjM8N.js";import"./chartDataContext-CP0m3FVl.js";import"./CategoricalChart-DzWKYdxW.js";import"./Symbols-DXy4L9hX.js";import"./symbol-Qg6WhLGN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-WxvLcI.js";import"./uniqBy-CeYNO4r-.js";import"./iteratee-Bb80RnL1.js";import"./AnimatedItems-BIcnZI45.js";import"./useAnimationId-CwhUANii.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DMpLU3WW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DvTz2wmh.js";import"./tooltipContext-DURoZOYw.js";import"./RegisterGraphicalItemId-mR_kXHAC.js";import"./ErrorBarContext-DaXU1Z8v.js";import"./GraphicalItemClipPath-2lYWsPZE.js";import"./SetGraphicalItem-CyRpKe3K.js";import"./getZIndexFromUnknown-DYuX537z.js";import"./useGraphicalItemIdentity-CvTNdUiI.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
