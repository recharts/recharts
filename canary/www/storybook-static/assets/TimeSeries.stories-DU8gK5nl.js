import{R as e}from"./iframe-C60CeSr1.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BvEbbPhK.js";import{R as h}from"./zIndexSlice-OJv_DQrU.js";import{C as g}from"./ComposedChart-BzAN8QDH.js";import{L as x}from"./Line-CMs-Gd4q.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CKiULClT.js";import{T as V}from"./Tooltip-4d6bzF4V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CFb2o3L1.js";import"./Layer-BkafIlY5.js";import"./resolveDefaultProps-BGY8S9MU.js";import"./Text-DbOMyqnY.js";import"./DOMUtils-DGbVIUY3.js";import"./isWellBehavedNumber-ps2XZnBQ.js";import"./useId-DOhjH30T.js";import"./useBackwardsCompatibleTheme-NWguYV1j.js";import"./Label-D00_RuVZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DZjPHzll.js";import"./index-CLcnbG-9.js";import"./index-Bqwda9Fq.js";import"./types-Bt5cyCk_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-tOvQVNJQ.js";import"./throttle-4y-zsF2K.js";import"./index-BORXIxjx.js";import"./index-BpZ-_TsI.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-GqvtI-xq.js";import"./axisSelectors-8LjSDh6r.js";import"./index-BHPplqCM.js";import"./CartesianChart-Dx5XpQWF.js";import"./chartDataContext-wxbL5Q17.js";import"./CategoricalChart-DorDSMvO.js";import"./Curve-Dnnwa-VF.js";import"./step-7U-QL9rs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BorEvTXc.js";import"./useAnimationId-SZ0HilGc.js";import"./ActivePoints-5H7EYI7d.js";import"./Dot-DqDbCkrn.js";import"./RegisterGraphicalItemId-TGLRvyhw.js";import"./ErrorBarContext-D1-31f6l.js";import"./GraphicalItemClipPath-D_FqHT2B.js";import"./SetGraphicalItem-BDVcT93s.js";import"./getRadiusAndStrokeWidthFromDot-1touBkwt.js";import"./ActiveShapeUtils-D3L9NjGk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-da1IKuQA.js";import"./uniqBy-BKlE9h1Q.js";import"./iteratee-C71t-VFG.js";import"./Cross-BzguAgSh.js";import"./Rectangle-Efiryd3x.js";import"./util-Dxo8gN5i.js";import"./Sector-Mj2xoxEK.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
