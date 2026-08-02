import{r as f,R as e}from"./iframe-Da76_689.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dp_F69G6.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-a0xNinnk.js";import{C as k}from"./ComposedChart--w51xXk6.js";import{X as K}from"./XAxis-DepWA4im.js";import{L as v}from"./Legend-D54_s6lq.js";import{B as s}from"./Bar-Cqez5vG3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BNqYKN1e.js";import"./Text-C0rNKqCf.js";import"./resolveDefaultProps-BpFPYIFo.js";import"./DOMUtils-B2_jGy5F.js";import"./isWellBehavedNumber-CH2-kpaa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DP22msHm.js";import"./index-C8Z1S5Pt.js";import"./index-DUt0bfqM.js";import"./RechartsWrapper-BJISCefM.js";import"./index-DhFXp8vM.js";import"./index-JDhekbA3.js";import"./throttle-COYVVxZg.js";import"./renderedTicksSlice-ObOqR6xe.js";import"./axisSelectors-Bw6517Pm.js";import"./d3-scale-DyCdYIOY.js";import"./CartesianAxis-BQNrFnRM.js";import"./Layer-BItCE877.js";import"./types-Dy7AAOTV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BbZg4AjH.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cprw1vi1.js";import"./chartDataContext-BxrKQ5f-.js";import"./CategoricalChart-D82DfAs8.js";import"./Symbols-C6OkA8gc.js";import"./symbol-BZZREhJC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BzkW5WMd.js";import"./uniqBy-CW1xeKFH.js";import"./iteratee-Bhotarsi.js";import"./tooltipContext-eXD9bPdx.js";import"./AnimatedItems-TTrqb8VQ.js";import"./useAnimationId-hnsh8Uwf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B4LUgefq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Da9-43zR.js";import"./RegisterGraphicalItemId-DiJJvqsF.js";import"./ErrorBarContext-rSCCD8H3.js";import"./GraphicalItemClipPath-BO9b33Ly.js";import"./SetGraphicalItem-Bzc-F73M.js";import"./getZIndexFromUnknown-DaFLHOmZ.js";import"./graphicalItemSelectors-bVhLjSEG.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
