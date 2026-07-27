import{r as f,R as e}from"./iframe-CLpUHFUx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-2SAbeq8Q.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ih_i1g5t.js";import{C as k}from"./ComposedChart-7luAuAhp.js";import{X as K}from"./XAxis-DQukB1wG.js";import{L as v}from"./Legend-DubnagiF.js";import{B as s}from"./Bar-CiSioiM0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Dv_zGlnO.js";import"./Layer-3AQvPOBc.js";import"./resolveDefaultProps-DTakvVP9.js";import"./Text-CSq4IeED.js";import"./DOMUtils-D-nz1rzx.js";import"./isWellBehavedNumber-CHss1wLf.js";import"./Label-Cri2SigJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DoU1T_G7.js";import"./index-CvxUcRs5.js";import"./index-DaW4Sl48.js";import"./types-BtWOZotP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CuCo3UJj.js";import"./throttle-CLd1kjXB.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-VhXLtIU3.js";import"./index-BQRTjV6n.js";import"./index-BWENVgmR.js";import"./axisSelectors-DcdgEKfW.js";import"./d3-scale-BxXYUMYM.js";import"./CartesianChart-BoKvv8NW.js";import"./chartDataContext-BXtd66MC.js";import"./CategoricalChart-D4oV83W1.js";import"./Symbols-H0HhizFF.js";import"./symbol-2ZaHrFGi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4nhhdQM-.js";import"./uniqBy-BL16Mnd5.js";import"./iteratee-DMRQCYyf.js";import"./tooltipContext-DgmfgwCZ.js";import"./AnimatedItems-BvAtBQX7.js";import"./useAnimationId-NKiMzI6a.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-5xIBVaz8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BoZWmQGY.js";import"./RegisterGraphicalItemId-D5SJC0o6.js";import"./ErrorBarContext-DOU6usMR.js";import"./GraphicalItemClipPath-BJ5GEIwI.js";import"./SetGraphicalItem-DL6fPXwP.js";import"./getZIndexFromUnknown-G8eXIbqR.js";import"./graphicalItemSelectors-DkqTdS0-.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
