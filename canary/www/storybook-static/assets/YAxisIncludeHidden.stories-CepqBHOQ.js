import{r as f,R as e}from"./iframe-DnFxx7IH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CEWgAKNT.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DMQesRjL.js";import{C as k}from"./ComposedChart-nZqnVWXT.js";import{X as K}from"./XAxis-IDSfm9bg.js";import{L as v}from"./Legend-Ca_KDK-L.js";import{B as s}from"./Bar-D7-CEhDB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label--8_ga_Yz.js";import"./Text-DMuBrTIK.js";import"./resolveDefaultProps-BrQSc28h.js";import"./DOMUtils-L7csA6Z4.js";import"./isWellBehavedNumber-DwCdsfaa.js";import"./useId-DrpNe8Nn.js";import"./useBackwardsCompatibleTheme-DDCq5JLw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DWUDk33_.js";import"./index-rcoyIDVk.js";import"./index-Brqhvl0Y.js";import"./RechartsWrapper-BEVhWh0t.js";import"./index-GUUQK7eb.js";import"./index-CAdU6H6S.js";import"./throttle-D9ypYn8O.js";import"./axisSelectors-5k6UVVXW.js";import"./d3-scale-Bs_R4IxC.js";import"./renderedTicksSlice-D0pYs9KP.js";import"./CartesianAxis-BE4Vor5z.js";import"./Layer-D_Gfp3eA.js";import"./types-BDVRIOHN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DEdd4Z6y.js";import"./chartDataContext-DJs6EXfK.js";import"./CategoricalChart-DJUCMkjn.js";import"./Symbols-Bz-bEPn5.js";import"./symbol-B6M4kKq8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uQ8Z7oyS.js";import"./uniqBy-BPRwV-au.js";import"./iteratee-DD5UE0pF.js";import"./AnimatedItems-C4h-Xaxi.js";import"./useAnimationId-CvbAXd24.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIvdGauu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DMhAfvBj.js";import"./tooltipContext-Cjrh2pgr.js";import"./RegisterGraphicalItemId-CKqNw0Tr.js";import"./ErrorBarContext-UyjGsXAe.js";import"./GraphicalItemClipPath-Cr1fTws_.js";import"./SetGraphicalItem-BEKqBC8O.js";import"./getZIndexFromUnknown-CEpUfyH8.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Qui8nPll.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
