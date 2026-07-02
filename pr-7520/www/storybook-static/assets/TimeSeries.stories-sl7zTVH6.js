import{R as e}from"./iframe-BiO1LFJs.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BRwCq2oj.js";import{R as h}from"./zIndexSlice-CmtXwCpm.js";import{C as g}from"./ComposedChart-KVP1qpXF.js";import{L as x}from"./Line-1_BYKPYm.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B0MWpAf5.js";import{T as V}from"./Tooltip-n88-j1Kq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bp6siJa-.js";import"./Layer-H8Y9pDd0.js";import"./resolveDefaultProps-gKXUf8-9.js";import"./Text-BSmuYjPa.js";import"./DOMUtils-DsPsNFwh.js";import"./isWellBehavedNumber-Dxkk48kL.js";import"./Label-CZnmw5cu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-P1dNdSQJ.js";import"./index-CQxwz_yZ.js";import"./index-aP1SqDBB.js";import"./types-Bn2J_DOa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DYPlU4wm.js";import"./throttle-CSNtF4Q0.js";import"./RechartsWrapper-CzSMI4by.js";import"./index-De8uMPL0.js";import"./index-xoOEAtk6.js";import"./axisSelectors-C_E3bYBf.js";import"./CartesianChart-IjCJKDDX.js";import"./chartDataContext-Dd2hF0M7.js";import"./CategoricalChart-CD1H2W0S.js";import"./Curve-kUjOM15F.js";import"./step-CvpshmWh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DgpiirzW.js";import"./useAnimationId-CvsS4m8J.js";import"./ActivePoints-BKJaC1Uq.js";import"./Dot-B5F-cqV_.js";import"./RegisterGraphicalItemId-DTynMESK.js";import"./ErrorBarContext-DCf_sWWl.js";import"./GraphicalItemClipPath-BeoHEVW6.js";import"./SetGraphicalItem-BmZzevIp.js";import"./getRadiusAndStrokeWidthFromDot-DCnDKADl.js";import"./ActiveShapeUtils-Bl46xbNE.js";import"./useElementOffset-dpEKlp0x.js";import"./uniqBy-BVXibjHx.js";import"./iteratee-C9sw1IiS.js";import"./Cross-TOJOS5mm.js";import"./Rectangle-CTCiy3q0.js";import"./util-Dxo8gN5i.js";import"./Sector-CAilI50V.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
