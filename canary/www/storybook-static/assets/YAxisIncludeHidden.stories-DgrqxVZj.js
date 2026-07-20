import{r as f,R as e}from"./iframe-txLfFnZC.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bqp7D6OE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BxlfArAG.js";import{C as k}from"./ComposedChart-C3txqyeK.js";import{X as K}from"./XAxis-CUKDl1yE.js";import{L as v}from"./Legend-BQxnnMgC.js";import{B as s}from"./Bar-DIBt6LBj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bpg83Llu.js";import"./Layer-DgCStFRG.js";import"./resolveDefaultProps-BBYfN4li.js";import"./Text-CFMnT5X2.js";import"./DOMUtils-BfTHFrOm.js";import"./isWellBehavedNumber-DsLwC3LI.js";import"./Label-Bg0xf_F2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CgOQ9duv.js";import"./index-faRlTy-y.js";import"./index-BnBpNwbh.js";import"./types-DBwOBb8v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C2wSEtKv.js";import"./throttle-q2TDx7Oc.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BDYeTMp6.js";import"./index-CYC3OVnH.js";import"./index-CTiUFbNZ.js";import"./axisSelectors-ClpNZRSK.js";import"./d3-scale-C2Ev96_0.js";import"./CartesianChart-CZzNDwaM.js";import"./chartDataContext-B9BMm3ef.js";import"./CategoricalChart-D2mtca-7.js";import"./Symbols-hsOVb6JR.js";import"./symbol-DBs6dCEX.js";import"./path-DyVhHtw_.js";import"./useElementOffset--duMbzsX.js";import"./uniqBy-mrq-VNPF.js";import"./iteratee-BctTBoA4.js";import"./tooltipContext-CKBdin0m.js";import"./AnimatedItems-DXTzwQHr.js";import"./useAnimationId-BBZuCs7J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DXH6HZeC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CgPV4Ht_.js";import"./RegisterGraphicalItemId-CKNrcWiv.js";import"./ErrorBarContext-g-_09_Lv.js";import"./GraphicalItemClipPath-CeZp1Nou.js";import"./SetGraphicalItem-ZtkOOX-3.js";import"./getZIndexFromUnknown-Cu0mtb3l.js";import"./graphicalItemSelectors-p5AVEwSd.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
