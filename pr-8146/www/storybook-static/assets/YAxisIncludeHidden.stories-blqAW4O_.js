import{r as f,R as e}from"./iframe-BSZdIOb1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BidQV3Bs.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-x95uaAeG.js";import{C as k}from"./ComposedChart-CDWJbZ6n.js";import{X as K}from"./XAxis-G0FofNWa.js";import{L as v}from"./Legend-DTU0g8fL.js";import{B as a}from"./Bar-DjeOXSf4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cim8hMW4.js";import"./Text-Bz3RDDRF.js";import"./resolveDefaultProps-D3SG1Voa.js";import"./DOMUtils-bqeGnrQd.js";import"./ZIndexLayer-yq1Eddx2.js";import"./index-MExGibHi.js";import"./index-zsHkXx4R.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-3PQGkC2Y.js";import"./throttle-CSUb4-AW.js";import"./axisSelectors-YkanTYDO.js";import"./d3-scale-4UnkzbhN.js";import"./CartesianAxis-DAsXTQiH.js";import"./Layer-uHX297jU.js";import"./types-Dvrgl9IY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJuGaZyZ.js";import"./index-bJBh3omb.js";import"./index-TMoyXsD5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BkCZoC17.js";import"./index-KnfBFAge.js";import"./fillDefinitions-DxVVI7tr.js";import"./CartesianChart-Bw5m5b1-.js";import"./ZIndexPortal-4kIQjZh0.js";import"./CategoricalChart-DA0Cyxxs.js";import"./Symbols-CWFcXiNy.js";import"./symbol-DRMp_7qO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-d8UGFEqu.js";import"./uniqBy-BVEW4IKF.js";import"./iteratee-dTH4fWHS.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-lC_U3aX6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CmV7ANCN.js";import"./useAnimationId-CA_zjy4c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D_M0EMWZ.js";import"./tooltipContext-CK842sh_.js";import"./dataEntryStyles-CFBEHlKQ.js";import"./ErrorBarContext-Co8GUKFe.js";import"./activeStyles-DKcFBEEB.js";import"./SetGraphicalItem-C-eJsLZg.js";import"./getZIndexFromUnknown-ByKrhZh8.js";import"./useEffectiveDataKey-e2XyZYHS.js";import"./omit-DVYwvLGy.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
