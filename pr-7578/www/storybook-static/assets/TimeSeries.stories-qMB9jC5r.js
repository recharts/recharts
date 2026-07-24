import{R as e}from"./iframe-Dz-8xobX.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DMj3Kvex.js";import{R as h}from"./zIndexSlice-DLGpG8sy.js";import{C as g}from"./ComposedChart-gmjevVFY.js";import{L as x}from"./Line-B2VZCiKC.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Eu5vW6Yz.js";import{T as V}from"./Tooltip-JL5ofiGR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BSXwVKyu.js";import"./Layer-DM8xvsTO.js";import"./resolveDefaultProps-jtUUwvO_.js";import"./Text-CvUE7W_7.js";import"./DOMUtils-9gmha4le.js";import"./isWellBehavedNumber-C60qZ5Lu.js";import"./Label-CUth2UOL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BepkwV1X.js";import"./index-DwxVslcQ.js";import"./index-50xdzldc.js";import"./types-B2b4Ay33.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CUvwyxyl.js";import"./throttle-BhiZXvYf.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BxZxX3d-.js";import"./index-D51_thAx.js";import"./index-nwbz6jJ6.js";import"./axisSelectors-RA5EatZ8.js";import"./CartesianChart-CXDvShYZ.js";import"./chartDataContext-DFkhy0VZ.js";import"./CategoricalChart-Dl3rCbrV.js";import"./Curve-C_Qt5Biu.js";import"./step-B3JVaVSK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C8QaJVru.js";import"./useAnimationId-DHQotoBY.js";import"./ActivePoints-nN-9PNcc.js";import"./Dot-HydkS6Pw.js";import"./RegisterGraphicalItemId-CqDct8KX.js";import"./ErrorBarContext-CHoqNUZJ.js";import"./GraphicalItemClipPath-DMz5gKke.js";import"./SetGraphicalItem-1qJXA-7o.js";import"./getRadiusAndStrokeWidthFromDot-j5D6edh7.js";import"./ActiveShapeUtils-C_pP3GP_.js";import"./useElementOffset-BzS3hzef.js";import"./uniqBy-C0Bh4kGh.js";import"./iteratee-DFjnW7Yu.js";import"./Cross-CWvhF5sg.js";import"./Rectangle-BjULrVDC.js";import"./util-Dxo8gN5i.js";import"./Sector-BB_eiEE_.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
