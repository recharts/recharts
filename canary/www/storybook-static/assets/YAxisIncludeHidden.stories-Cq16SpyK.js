import{r as f,R as e}from"./iframe-DyrNzYfG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-D2470_wO.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BxcBivH8.js";import{C as k}from"./ComposedChart-CU6tXOSz.js";import{X as K}from"./XAxis-BfZ0zCU8.js";import{L as v}from"./Legend-BsnMj6Wq.js";import{B as s}from"./Bar-fQF2BH1m.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cagOI5AH.js";import"./CartesianAxis-DqWwR38e.js";import"./Layer-BL2D6iSn.js";import"./resolveDefaultProps-xqaJSNtt.js";import"./Text-CnNg3gGa.js";import"./DOMUtils-odAOb060.js";import"./isWellBehavedNumber-Bd2sibwy.js";import"./Label-mQIBMRk4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BkddZKJi.js";import"./index-CHWPJWR6.js";import"./index-NUd0OKr5.js";import"./types-DDNG0zv9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6uhyxBm.js";import"./throttle-Cm4al6R2.js";import"./RechartsWrapper-BdG0zq9-.js";import"./index-CdQUwFqU.js";import"./index-BpeVWu4H.js";import"./axisSelectors-CD9PShsx.js";import"./d3-scale-BldhV8lg.js";import"./CartesianChart-UfO6rtst.js";import"./chartDataContext-CubF16Dj.js";import"./CategoricalChart-CWXn607r.js";import"./Symbols-BMQcqtYo.js";import"./symbol-DJNZJDlM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CsvBpDcL.js";import"./uniqBy-DxrPsyJv.js";import"./iteratee-DWMjSvsX.js";import"./tooltipContext-Cz-O6016.js";import"./AnimatedItems-Cq3mCAt5.js";import"./useAnimationId-AVj-rcCC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CK9rNIIm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9juqJKGt.js";import"./RegisterGraphicalItemId-CvfrlEi9.js";import"./ErrorBarContext-XAPu5vDV.js";import"./GraphicalItemClipPath-ClGJav6d.js";import"./SetGraphicalItem-xVo5bUKT.js";import"./getZIndexFromUnknown-DFBrmXN3.js";import"./graphicalItemSelectors-C0la4YRj.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
