import{r as f,R as e}from"./iframe-jpw6hTzP.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cro589xA.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-0hywYSss.js";import{C as k}from"./ComposedChart-CLKvf99S.js";import{X as K}from"./XAxis-i-qKaY8p.js";import{L as v}from"./Legend-CFZOTL0L.js";import{B as s}from"./Bar-CwW5sQEX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-hrtgNZzr.js";import"./Layer-DBhjUf2v.js";import"./resolveDefaultProps-B-NoCwnk.js";import"./Text-CD-hvoQS.js";import"./DOMUtils-ByIChG1Y.js";import"./isWellBehavedNumber-Bpm3dXa6.js";import"./Label-Ddiq2mWQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qT8qrsoe.js";import"./index-DO5hoWZ6.js";import"./index-BVY5iI86.js";import"./types-Q9eva-kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DaJpGvtP.js";import"./throttle-CyRNR61p.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DETDaPtv.js";import"./index-BAw2ZYTH.js";import"./index-B3JmkEsF.js";import"./axisSelectors-fmgxI94T.js";import"./d3-scale-DRfhHoT1.js";import"./CartesianChart-CgGbY7Vc.js";import"./chartDataContext-BOCAF6JU.js";import"./CategoricalChart-CgK2HWLH.js";import"./Symbols-DYBQppO_.js";import"./symbol-IJi7h63D.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-e6OQM8.js";import"./uniqBy-Dn1sAR5T.js";import"./iteratee-ZOl5KNFh.js";import"./tooltipContext-daoShmAn.js";import"./AnimatedItems-QuI77x2Z.js";import"./useAnimationId-BDRU6NIW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLYrXLOh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CdjeeMGu.js";import"./RegisterGraphicalItemId-BKfVpYlc.js";import"./ErrorBarContext-TSI08DrR.js";import"./GraphicalItemClipPath-BtpdwkC7.js";import"./SetGraphicalItem-B7bXtFbE.js";import"./getZIndexFromUnknown-Bs7pqycU.js";import"./graphicalItemSelectors-RdqMeZ9P.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
