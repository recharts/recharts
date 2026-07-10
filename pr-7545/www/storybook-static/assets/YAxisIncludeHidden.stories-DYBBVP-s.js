import{r as f,R as e}from"./iframe-BRR_Yx3q.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DT9J28i-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-2cKWUmx1.js";import{C as k}from"./ComposedChart-BrQA-1mf.js";import{X as K}from"./XAxis-D2YOv_sk.js";import{L as v}from"./Legend-8oAOgQMw.js";import{B as s}from"./Bar-ZNSun0S3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CtRqWNRX.js";import"./Layer-DEnO1k0R.js";import"./resolveDefaultProps-BuYHfJJu.js";import"./Text-CNcfggmg.js";import"./DOMUtils-DaLtqU51.js";import"./isWellBehavedNumber-BoZxamXc.js";import"./Label-BFmCxOLP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B_gUHSFj.js";import"./index-C-RWhaz3.js";import"./index-dwufCIeA.js";import"./types-DUTL6gmw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsmsDUZ3.js";import"./throttle-9Cm-XaBZ.js";import"./RechartsWrapper-Dreti13-.js";import"./index-C7O-rWXn.js";import"./index-CJWeDOqD.js";import"./axisSelectors-BvSj2dv3.js";import"./d3-scale-DiG9HsKp.js";import"./CartesianChart-D7iKBlwo.js";import"./chartDataContext-7uLTjT1t.js";import"./CategoricalChart-Bo9h-nM1.js";import"./Symbols-CNXodT7a.js";import"./symbol-Brgl6U8b.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DhJ2uqTW.js";import"./uniqBy-skO6ce2Q.js";import"./iteratee-jFm--KAQ.js";import"./tooltipContext-Dd3NVMXv.js";import"./AnimatedItems-BTME76kn.js";import"./useAnimationId-C1SKzxsx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CzyNBMZ7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BvVAnTtS.js";import"./RegisterGraphicalItemId-vR20SUSb.js";import"./ErrorBarContext-DKxut-kF.js";import"./GraphicalItemClipPath-DlaiPyn0.js";import"./SetGraphicalItem-BE7YCbvJ.js";import"./getZIndexFromUnknown-2GicE75J.js";import"./graphicalItemSelectors-BBSGChtr.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
