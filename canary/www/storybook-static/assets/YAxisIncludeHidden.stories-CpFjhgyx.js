import{r as f,R as e}from"./iframe-L3U4PXsg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-f7uBkTcv.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DEY0PQhJ.js";import{C as k}from"./ComposedChart-Dkixnof2.js";import{X as K}from"./XAxis-Cr6XecvK.js";import{L as v}from"./Legend-DtkrYBZW.js";import{B as s}from"./Bar-BpysXjwb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B7Q2YiAq.js";import"./Text-DovToi-v.js";import"./resolveDefaultProps-DZ-vNTge.js";import"./DOMUtils-BtvfpILU.js";import"./isWellBehavedNumber-BwlzE5Kb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bn3RUVWt.js";import"./index-Bc6oV31c.js";import"./index-DwDM_7Ax.js";import"./RechartsWrapper-Dhr4IQZK.js";import"./index-kTWfYntd.js";import"./index-ywjMrX_X.js";import"./throttle-1AGwrNmW.js";import"./axisSelectors-BUQrPPfP.js";import"./d3-scale-BML9T1At.js";import"./renderedTicksSlice-D2JO8twM.js";import"./CartesianAxis-DJ55n4uj.js";import"./Layer-CK7JaaLc.js";import"./types-oKR4keO9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsEJ0H_M.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-INIUEhvM.js";import"./chartDataContext-EPhxp5b3.js";import"./CategoricalChart-mkEHtD3F.js";import"./Symbols-C3FHvuf0.js";import"./symbol-Da9x_VYL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-AZryebb6.js";import"./uniqBy-BfdCN-YR.js";import"./iteratee-BsSJFXKh.js";import"./tooltipContext-q_KI6h-9.js";import"./AnimatedItems-Cx-Jnru-.js";import"./useAnimationId-BO1w5K0N.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C4EXzzh1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DLAF0QLB.js";import"./RegisterGraphicalItemId-CUZSiPzN.js";import"./ErrorBarContext-BscpV9GC.js";import"./GraphicalItemClipPath-BgQIEIQL.js";import"./SetGraphicalItem-BkVYHSQy.js";import"./getZIndexFromUnknown-CDHNrHbY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BJYLeCHd.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
