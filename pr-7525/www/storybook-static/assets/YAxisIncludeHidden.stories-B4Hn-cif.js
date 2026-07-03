import{r as f,R as e}from"./iframe-mx_m0Bbx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D0miqhdY.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DzRj0O2j.js";import{C as k}from"./ComposedChart-BENGvYsD.js";import{X as K}from"./XAxis-e2aIYDeC.js";import{L as v}from"./Legend-LU7nsQg3.js";import{B as s}from"./Bar-BLrhuKRP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-uqQC2EBI.js";import"./Layer-CIGRgmJf.js";import"./resolveDefaultProps-DbkTAdx2.js";import"./Text-BRqwcuo5.js";import"./DOMUtils-CxMZUWXo.js";import"./isWellBehavedNumber-DNgXwIS7.js";import"./Label-CTtz2nFH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DoWBLOas.js";import"./index-VyciUKje.js";import"./index-D6L8-6uP.js";import"./types-CGXKV1tr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dbw1NMhi.js";import"./throttle-C4NetDSi.js";import"./RechartsWrapper-BGo6HJcU.js";import"./index-DRxhjL8G.js";import"./index-DfXqfQfJ.js";import"./axisSelectors-BCNbmsqC.js";import"./d3-scale-Dkhn0JVn.js";import"./CartesianChart-CI1Yx8pO.js";import"./chartDataContext-DbyvTQIy.js";import"./CategoricalChart-CaTs9Dwm.js";import"./Symbols-CHdplG38.js";import"./symbol-2gV0br5j.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B1ENHzAZ.js";import"./uniqBy-CP0rnImt.js";import"./iteratee-Cu1e9zHo.js";import"./tooltipContext-DrwEEe3Q.js";import"./AnimatedItems-CxqbLrvD.js";import"./useAnimationId-B1RQqc1z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KZcqepmk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNcmVmA7.js";import"./RegisterGraphicalItemId-A-L91Q74.js";import"./ErrorBarContext-DRhFO-yz.js";import"./GraphicalItemClipPath-DdGvz8Ok.js";import"./SetGraphicalItem-_D-u02tv.js";import"./getZIndexFromUnknown-DFSjb3cp.js";import"./graphicalItemSelectors-CIKPVBBJ.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
