import{r as f,R as e}from"./iframe-DLS25dHQ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BYgagr7S.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-l2YZmfJm.js";import{C as k}from"./ComposedChart-3ReoGfqO.js";import{X as K}from"./XAxis-ZvceRVhD.js";import{L as v}from"./Legend-CMw0PR8-.js";import{B as s}from"./Bar-BMdmSl7k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bs5nvBdN.js";import"./Text-DoJs4GjF.js";import"./resolveDefaultProps-C31rpRZv.js";import"./DOMUtils-B4V2lSh1.js";import"./isWellBehavedNumber-oc6n5G8D.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVnRsL__.js";import"./index-ByCW5xID.js";import"./index-Dq9FB6TB.js";import"./RechartsWrapper-B_GPZUKV.js";import"./index-CfSfkQYu.js";import"./index-CbCT7aty.js";import"./throttle-Hx_xB1Pu.js";import"./axisSelectors-L-RJvPIw.js";import"./d3-scale-BGUeNoA2.js";import"./renderedTicksSlice-CvT_UYhE.js";import"./CartesianAxis-ByLvjEbn.js";import"./Layer-DThhki4j.js";import"./types-BNikxk5Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DQBBH2gy.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D13Xcxp2.js";import"./chartDataContext-D70kksUU.js";import"./CategoricalChart-C6ulcIic.js";import"./Symbols-BghUztBR.js";import"./symbol-DJn7TpAb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DOuGmOFv.js";import"./uniqBy-CkpvLjjt.js";import"./iteratee-BC57QjIY.js";import"./tooltipContext-DltJzF-4.js";import"./AnimatedItems-C-FlKGX8.js";import"./useAnimationId-BwYkYmq-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DyGyBKmJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZHkl0hJ.js";import"./RegisterGraphicalItemId-DMMtsE5T.js";import"./ErrorBarContext-BMV815Qz.js";import"./graphicalItemIdentity-COzJlxtu.js";import"./SetGraphicalItem-B5zc41tl.js";import"./getZIndexFromUnknown-IJM925lj.js";import"./graphicalItemSelectors-Ca1NR3-_.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
