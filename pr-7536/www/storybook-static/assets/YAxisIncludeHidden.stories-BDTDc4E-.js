import{r as f,R as e}from"./iframe-GFu4u_Sr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DPkQctbd.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B5qFJFtI.js";import{C as k}from"./ComposedChart-aZQazbAt.js";import{X as K}from"./XAxis-DCmYbaAb.js";import{L as v}from"./Legend-JpIvIi3S.js";import{B as s}from"./Bar-BRYtNt63.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BChvL9JZ.js";import"./Layer-rjKJbMCf.js";import"./resolveDefaultProps-B2kj8vGo.js";import"./Text-CHl4arA0.js";import"./DOMUtils-BV_Da9To.js";import"./isWellBehavedNumber-BzBjtwBe.js";import"./Label-DJGaBZN0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DO98mi6X.js";import"./index-J8ff_bgA.js";import"./index-BoT4UeUf.js";import"./types-CpBB06eN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dhv-F3Ii.js";import"./throttle-CQYhSY5q.js";import"./RechartsWrapper-GJPBo-3J.js";import"./index-fFvV_i1o.js";import"./index-CFslUPNA.js";import"./axisSelectors-CITTcs7P.js";import"./d3-scale-XJfpe2FZ.js";import"./CartesianChart-5jGrrHiW.js";import"./chartDataContext-ABcCQ5OY.js";import"./CategoricalChart-DaWqkQxP.js";import"./Symbols-DVtZC3AN.js";import"./symbol-DEeTDO-b.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DBEFVHKJ.js";import"./uniqBy-eEvGEJfN.js";import"./iteratee-BruxsO2g.js";import"./tooltipContext-2Jmu8Kxq.js";import"./AnimatedItems-BMr3q6ws.js";import"./useAnimationId-DHrR_uSV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BEnsF74A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DrDRZtp1.js";import"./RegisterGraphicalItemId-C2TZCZTY.js";import"./ErrorBarContext-E48lOcW2.js";import"./GraphicalItemClipPath-Dp-oK_MY.js";import"./SetGraphicalItem-BWFxWlyV.js";import"./getZIndexFromUnknown-DTnGh4bz.js";import"./graphicalItemSelectors-B3NohPBl.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
