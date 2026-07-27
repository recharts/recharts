import{r as f,R as e}from"./iframe-KfsXDyYe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BIQLiJJ1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DRQ5ZoPP.js";import{C as k}from"./ComposedChart-DZx5d73W.js";import{X as K}from"./XAxis-BunU0kIP.js";import{L as v}from"./Legend-PPLZhzBK.js";import{B as s}from"./Bar-B_v_O8Dp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DJyQkACC.js";import"./Layer-DvnIPp0b.js";import"./resolveDefaultProps-CJQcFjaM.js";import"./Text-Cvia8ncb.js";import"./DOMUtils-r4qPFFQL.js";import"./isWellBehavedNumber-B9hqvBfv.js";import"./Label-dJq5mBhi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DyFku1ry.js";import"./index-B8nw1mbK.js";import"./index-USmxlz8z.js";import"./types-Cp7Kv4cO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-VAstzL9_.js";import"./throttle-0X77pc-d.js";import"./RechartsThemeContext-s5HlCTRW.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-B1g5OPk8.js";import"./index-BcSxHpM2.js";import"./index-D3u1xKBW.js";import"./axisSelectors-DqRFL16u.js";import"./d3-scale-CwZ0fpJQ.js";import"./CartesianChart-CedzGa4b.js";import"./chartDataContext-CrbAMOHN.js";import"./CategoricalChart-D28QOUrV.js";import"./Symbols-ClWMTeYK.js";import"./symbol-7YHxc7ew.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrZ2pKQv.js";import"./uniqBy-BdchAijA.js";import"./iteratee-ByW1jmvF.js";import"./tooltipContext-CW0bfCpA.js";import"./AnimatedItems-CsvMn_0v.js";import"./useAnimationId-BRufZRyg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CVNtesT6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-YGV0Qwxy.js";import"./RegisterGraphicalItemId-BVy8O7ka.js";import"./ErrorBarContext-BxIBjeUQ.js";import"./GraphicalItemClipPath-CLORxtCR.js";import"./SetGraphicalItem-BXsnmgyo.js";import"./getZIndexFromUnknown-DhZ2QViw.js";import"./graphicalItemSelectors-B7OD38_b.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
