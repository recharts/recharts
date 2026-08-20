import{r as f,R as e}from"./iframe-Csa_oMfm.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-tYvWvlOq.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BxquUHtq.js";import{C as k}from"./ComposedChart-eB5eedGT.js";import{X as K}from"./XAxis-uDV1OEUW.js";import{L as v}from"./Legend-Cuf7yFuV.js";import{B as s}from"./Bar-BNalVyG7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-KmPVqzrB.js";import"./Text-C_eX2bjG.js";import"./resolveDefaultProps-Byem5JrG.js";import"./DOMUtils-BFEBcDdR.js";import"./isWellBehavedNumber-DWOo1BMI.js";import"./useId-D1v4eS8N.js";import"./useBackwardsCompatibleTheme-D8HYBwfJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dj0ApPdW.js";import"./index-DAq0SL0A.js";import"./index-IjpwRB6F.js";import"./RechartsWrapper-CQ2cp1Au.js";import"./index-CfKNqcoW.js";import"./index-CRP06Y07.js";import"./throttle-CSxXhEFU.js";import"./axisSelectors-BG4FCknP.js";import"./d3-scale-BtpAo9Oq.js";import"./renderedTicksSlice-CaOZRI6N.js";import"./CartesianAxis-Cukq_zeL.js";import"./Layer-BKPwema6.js";import"./types-C6llbAwt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-LGWyPi5p.js";import"./chartDataContext-BH4G6z7_.js";import"./CategoricalChart-DnCPfHVF.js";import"./Symbols-B7lTBk7e.js";import"./symbol-Dua86BWe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CbgcJIP8.js";import"./uniqBy-DJZRRRzN.js";import"./iteratee-BCfsRupd.js";import"./AnimatedItems-DNlS9_lf.js";import"./useAnimationId-C2aTUSsq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CHMSO-4U.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DtwpfCs_.js";import"./tooltipContext-Ux_aw3-4.js";import"./RegisterGraphicalItemId-BpNCJT0O.js";import"./ErrorBarContext-Ch5kSSkb.js";import"./GraphicalItemClipPath-BFLHGHAh.js";import"./SetGraphicalItem-DHDvzfH7.js";import"./getZIndexFromUnknown-CiBmCZb_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B12qC28t.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
