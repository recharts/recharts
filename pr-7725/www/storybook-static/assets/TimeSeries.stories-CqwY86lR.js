import{R as e}from"./iframe-DccHD9cJ.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Btq-uLxc.js";import{R as h}from"./zIndexSlice-DTUZOs4Q.js";import{C as g}from"./ComposedChart-IZbmlTb-.js";import{L as x}from"./Line-ChUnqlEz.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Bc5gFn0f.js";import{T as V}from"./Tooltip-CL_4DQ_e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-D0w9DA3M.js";import"./Layer-DWnnL9ma.js";import"./resolveDefaultProps-Bx2wnEd4.js";import"./Text-jeWIJF52.js";import"./DOMUtils-D6lsaUk9.js";import"./isWellBehavedNumber-DqPgz5Yi.js";import"./useId-Dai3NE_g.js";import"./useBackwardsCompatibleTheme-DZ6Qm6iv.js";import"./Label-DVskdjtu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKXOPUJQ.js";import"./index-DMwNxWPw.js";import"./index-N3-9WR0Y.js";import"./types-CsFJg5Ml.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D4ngpquf.js";import"./throttle-DVrp2GLO.js";import"./index-6ZXP3-Xk.js";import"./index-C-5pzGe4.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Df3mrbj3.js";import"./axisSelectors-F-OrX_Xw.js";import"./index-CWyYWxmD.js";import"./CartesianChart-ByhNp3iB.js";import"./chartDataContext-TE-BNMGm.js";import"./CategoricalChart-BciEww7Z.js";import"./Curve-v6KG-oLe.js";import"./step-BNCkH4O7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DAcltxFf.js";import"./useAnimationId-pGJexV-0.js";import"./ActivePoints-BC5zZJgg.js";import"./Dot-zbPRTYvb.js";import"./RegisterGraphicalItemId-DELhDSX_.js";import"./ErrorBarContext-CYJw9jDs.js";import"./GraphicalItemClipPath-D_oXYnWb.js";import"./SetGraphicalItem-BeH6rSAO.js";import"./getRadiusAndStrokeWidthFromDot-Dnr5euKK.js";import"./ActiveShapeUtils-tvNFAdrs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-DqOwHG6I.js";import"./uniqBy-DzyHfYT5.js";import"./iteratee-BxX9M0vU.js";import"./Cross-3PP3p9V9.js";import"./Rectangle-DZ08DrgT.js";import"./util-Dxo8gN5i.js";import"./Sector-DcR_WF-c.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
