import{r as f,R as e}from"./iframe-Czcj7Ej5.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BrgBYt1o.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CKivF8h7.js";import{C as k}from"./ComposedChart-BkinsCpZ.js";import{X as K}from"./XAxis-BDziZgbX.js";import{L as v}from"./Legend-CqdF2VkZ.js";import{B as s}from"./Bar-BIR95sOX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-OqXB0-3Q.js";import"./Text-BN2m7we3.js";import"./resolveDefaultProps-8BNEdWXX.js";import"./DOMUtils-CVT-c_43.js";import"./isWellBehavedNumber-Dco4JHSd.js";import"./useId-3K3eUDJ4.js";import"./useBackwardsCompatibleTheme-BpiBN5I0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CF-iLGvZ.js";import"./index-DMWmOMbl.js";import"./index-B91NvUo7.js";import"./RechartsWrapper-CDYHtUJT.js";import"./axisSelectors-BeEA7IYF.js";import"./throttle-BVmZUzar.js";import"./d3-scale-BQoi7yt5.js";import"./index-B0JfwGdu.js";import"./index-Bxr1sCFD.js";import"./renderedTicksSlice-CbrcSGbF.js";import"./index-CFVWldzh.js";import"./CartesianAxis-DqwYXNcz.js";import"./Layer-2POOn5CI.js";import"./types-CjYnj8ko.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dv6L8FEP.js";import"./chartDataContext-Bk1K2XnM.js";import"./CategoricalChart-Du7LZMoH.js";import"./Symbols-BVCpgQZT.js";import"./symbol-DAwNgG2X.js";import"./path-DyVhHtw_.js";import"./useElementOffset-49EfHLgl.js";import"./uniqBy-FrwGGnBN.js";import"./iteratee-CKwCJVNt.js";import"./AnimatedItems-B6csDPia.js";import"./useAnimationId-_fI9jCE-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DrGaLjNe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C-4luYKV.js";import"./tooltipContext-Di9UKZqK.js";import"./RegisterGraphicalItemId-DZFxFD16.js";import"./ErrorBarContext-BTb3p3NR.js";import"./GraphicalItemClipPath-BePsYx1e.js";import"./SetGraphicalItem-CX4EE90C.js";import"./getZIndexFromUnknown-CDCmXySr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CvRtM1fn.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
