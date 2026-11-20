import{R as e}from"./iframe-CMFw787F.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C_WTSptP.js";import{R as h}from"./zIndexSlice-DW-R_9mL.js";import{C as g}from"./ComposedChart-jPjAixDx.js";import{L as x}from"./Line-Bw4mZerm.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CNeDjyej.js";import{T as V}from"./Tooltip-CxOjIIZ-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DJ5NbueU.js";import"./Layer-DoofO9Zt.js";import"./resolveDefaultProps-BOABxk_y.js";import"./Text-DneUrFCx.js";import"./ZIndexLayer-zQQZbbdp.js";import"./index-DIgguH2B.js";import"./index-C6m7ox6c.js";import"./Label-CYtvKaSn.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2ZnybmZ1.js";import"./throttle-CR0jnMre.js";import"./types-DA1V6lfX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-AeJYcQuN.js";import"./index-PbtEsu_A.js";import"./index-CdT540h8.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-rk7JAHS6.js";import"./RechartsWrapper-AThag0NN.js";import"./index-BZFAdJUr.js";import"./fillDefinitions-CI5aneaf.js";import"./CartesianChart-tkvn-Ty3.js";import"./chartDataContext-DUqK50U7.js";import"./CategoricalChart-rbZS7bUK.js";import"./getRadiusAndStrokeWidthFromDot-Cm2FeWCV.js";import"./Curve-BOyetQ0I.js";import"./step-Droy7KkJ.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CcaQQEAi.js";import"./ActivePoints-BScFO1Ho.js";import"./Dot-DAUTDN16.js";import"./activeStyles-DP81Qo_e.js";import"./useAnimationId-DwVwC1xb.js";import"./Symbols-DMJ9ooJB.js";import"./symbol-CP9FSlU1.js";import"./ErrorBarContext-tb4T2KmR.js";import"./SetGraphicalItem-B5x77PpV.js";import"./ActiveShapeUtils-DVE_ISH9.js";import"./useEffectiveDataKey-rlJiXvMI.js";import"./useElementOffset-O2G3aTiM.js";import"./uniqBy-2YD2k7wm.js";import"./iteratee-6HUgj-CO.js";import"./isArguments-yB-y1yaH.js";import"./Cross-kWt6WnLq.js";import"./Rectangle-CnUfue8k.js";import"./util-Dxo8gN5i.js";import"./Sector-gX6jhz0C.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
