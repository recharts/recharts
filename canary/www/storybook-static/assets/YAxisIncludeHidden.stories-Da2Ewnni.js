import{r as f,R as e}from"./iframe-C7qTZtPI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BIekQKnh.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BcOfmYYd.js";import{C as k}from"./ComposedChart-C_NHVXsk.js";import{X as K}from"./XAxis-CgvkfXIs.js";import{L as v}from"./Legend-Ff-w8olr.js";import{B as s}from"./Bar-BRaGn58v.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C2LUMKQN.js";import"./Layer-y2Nfuyvg.js";import"./resolveDefaultProps-Ce1865_D.js";import"./Text-BCZsvPKZ.js";import"./DOMUtils-DEhyc4Rj.js";import"./isWellBehavedNumber-D1UA-S7t.js";import"./Label-DS1cnk1C.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B8jqXSnt.js";import"./index-BL1FkC_h.js";import"./index-cjepjzxR.js";import"./types-Bx79eQJf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CqCAs39i.js";import"./throttle-DLOScDmO.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-o9fcaOJn.js";import"./index-DzpRwwXn.js";import"./index-Bl3ZtZEI.js";import"./axisSelectors-vHpYaHv4.js";import"./d3-scale-BJE91LPh.js";import"./CartesianChart-CYC5HkCy.js";import"./chartDataContext-B2ck_4kp.js";import"./CategoricalChart-DlWBLDD7.js";import"./Symbols-C-I-zc-g.js";import"./symbol-CnfFmLvS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cn8CKhYV.js";import"./uniqBy-CXC3IJo1.js";import"./iteratee-lJbmW7AH.js";import"./tooltipContext-DGawLjrK.js";import"./AnimatedItems-HRihbpAW.js";import"./useAnimationId-D4WzgVDK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DuJIsTif.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJUH9QkP.js";import"./RegisterGraphicalItemId-hstJQcJh.js";import"./ErrorBarContext-BiuHMfT3.js";import"./GraphicalItemClipPath-CJL-G-6t.js";import"./SetGraphicalItem-B6Vsn-QI.js";import"./getZIndexFromUnknown-Cjl7GCXK.js";import"./graphicalItemSelectors-DidJxMin.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
